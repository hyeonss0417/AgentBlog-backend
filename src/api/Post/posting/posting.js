import {prisma} from "../../../../generated/prisma-client";
import AddHashtag from "../../../AddHashtag";

export default {
  Mutation: {
    posting: async (_, args, {request, checkIfAuthenticated}) => {
      checkIfAuthenticated(request);
      const {title, hashtags, content, series_title, files} = args;
      const {user} = request;
      const post = await prisma.createPost({
        title,
        user: {
          connect: {
            id: user.id,
          },
        },
        series: {
          connect: {
            id: series_title,
          },
        },
        content,
      });

      AddHashtag(post.id, hashtags);

      files.forEach(async (file) => {
        await prisma.createFile({
          url: file,
          post: {
            connect: {
              id: post.id,
            },
          },
        });
      });
      return post;
    },
  },
};
