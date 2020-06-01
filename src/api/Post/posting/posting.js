import {prisma} from "../../../../generated/prisma-client";
import AddHashtag from "../../../AddHashtag";
import {GetUniqueUrl} from "../../../GetUniqueUrl";

export default {
  Mutation: {
    posting: async (_, args, {request, checkIfAuthenticated}) => {
      checkIfAuthenticated(request);
      const {
        title,
        hashtags,
        content,
        series_id,
        files,
        thumbnail = null,
      } = args;
      const {user} = request;
      const url = await GetUniqueUrl(user.username, args.url);

      let createPostOption = {
        title,
        user: {
          connect: {
            id: user.id,
          },
        },
        thumbnail,
        url,
        content,
      };
      if (series_id) {
        createPostOption.series = {
          connect: {
            id: series_id,
          },
        };
      }

      const post = await prisma.createPost(createPostOption);

      if (hashtags) {
        AddHashtag(post.id, hashtags);
      }

      if (files) {
        files.forEach(async (file) => {
          prisma.createFile({
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
