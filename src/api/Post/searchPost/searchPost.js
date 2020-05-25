import {prisma} from "../../../../generated/prisma-client";

export default {
  Query: {
    searchPost: async (_, args) =>
      await prisma.posts({
        where: {
          OR: [{title_contains: args.term}, {content_contains: args.term}],
        },
      }),
  },
};
