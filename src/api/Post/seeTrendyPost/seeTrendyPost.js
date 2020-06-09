import {prisma} from "../../../../generated/prisma-client";

export default {
  Query: {
    seeTrendyPost: async (_, args) => {
      const posts = await prisma.posts({
        where: {thumbnail_not: null},
        orderBy: "updatedAt_DESC",
        first: 30,
      });

      return posts;
    },
  },
};
