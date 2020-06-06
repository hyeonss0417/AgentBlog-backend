import {prisma} from "../../../../generated/prisma-client";

export default {
  Query: {
    seeTrendyPost: async (_, args) => {
      const posts = await prisma.posts({
        orderBy: "updatedAt_ASC",
        first: 30,
      });

      return posts;
    },
  },
};
