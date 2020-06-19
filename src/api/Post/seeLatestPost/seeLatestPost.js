import {prisma} from "../../../../generated/prisma-client";

export default {
  Query: {
    seeLatestPost: async (_, args) => {
      const posts = await prisma.posts({
        orderBy: "createdAt_DESC",
        first: 100,
      });

      return posts;
    },
  },
};
