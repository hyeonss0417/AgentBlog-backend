import {prisma} from "../../../../generated/prisma-client";
import AddHashtag from "../../../AddHashtag";

export default {
  Mutation: {
    posting: async (_, args, {request, checkIfAuthenticated}) => {
      checkIfAuthenticated(request);
      const {title, hashtags, content, series_title, files} = args;
      const {user} = request;
      let {url} = args;

      let existingPost = true;

      while (existingPost) {
        existingPost = await prisma.$exists.posts({
          where: {
            username,
            url,
          },
        });
        if (existingPost) {
          url = args.url + generateSecret();
        }
      }

      let createPostOption = {
        title,
        user: {
          connect: {
            id: user.id,
          },
        },
        url,
        content,
      };
      if (series_title) {
        createPostOption.series = {
          connect: {
            id: series_title,
          },
        };
      }

      const post = await prisma.createPost(createPostOption);

      if (hashtags) {
        AddHashtag(post.id, hashtags);
      }

      if (files) {
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
      }
      return post;
    },
  },
};
