import {prisma} from "../../../../generated/prisma-client";

export default {
  Query: {
    getPostDetail: async (_, args) => {
      const {username, url} = args;
      const post = await prisma.posts({
        where: {
          username,
          url,
        },
      });
      if (post) return post[0];
      return null;
    },
  },
};
