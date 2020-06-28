import {prisma} from "../../../../generated/prisma-client";
import {addHashtag, getUniqueUrl, sanitizeContent} from "../../../utils";

export default {
  Mutation: {
    posting: async (_, args, {request, checkIfAuthenticated}) => {
      checkIfAuthenticated(request);
      const {
        title,
        hashtags,
        description = null,
        content,
        series_id,
        files,
        thumbnail = null,
      } = args;
      const {user} = request;
      const url = await getUniqueUrl(user.username, args.url);

      let createPostOption = {
        title,
        user: {
          connect: {
            id: user.id,
          },
        },
        thumbnail,
        url,
        content: sanitizeContent(content),
        description,
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
        addHashtag(post.id, hashtags);
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
