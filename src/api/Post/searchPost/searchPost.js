import {prisma} from "../../../../generated/prisma-client";

export default {
  Query: {
    searchPost: async (_, args) => {
      if (args.term === "") {
        return null;
      }
      return await prisma.posts({
        where: {
          OR: [{title_contains: args.term}, {content_contains: args.term}],
        },
      });
    },
  },
};
