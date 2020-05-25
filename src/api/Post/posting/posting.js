import {prisma} from "../../../../generated/prisma-client";

export default {
  Mutation: {
    posting: async (_, args, {request, checkIfAuthenticated}) => {
      checkIfAuthenticated(request);
      const {title, hashtags, content, files} = args;
      const {user} = request;
      const post = await prisma.createPost({
        title,
        user: {
          connect: {
            id: user.id,
          },
        },
        content,
      });

      hashtags.forEach(async (hashtag) => {
        try {
          const existingHashtag = await prisma.$exists.hashtag({name: hashtag});

          if (existingHashtag) {
            await prisma.updateHashtag({
              where: {name: hashtag},
              data: {
                posts: {
                  connect: {
                    id: post.id,
                  },
                },
              },
            });
          } else {
            await prisma.createHashtag({
              name: hashtag,
              posts: {
                connect: {
                  id: post.id,
                },
              },
            });
          }
        } catch (err) {
          console.log(err);
          return false;
        }
      });
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
