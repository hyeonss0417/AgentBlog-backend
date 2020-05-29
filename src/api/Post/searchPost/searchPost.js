import {prisma} from "../../../../generated/prisma-client";

export default {
  Query: {
    searchPost: async (_, args) => {
      if (args.term === "") {
        return null;
      }
      const term = args.term.toLowerCase();
      return await prisma.posts({
        where: {
          OR: [
            {title_contains: term},
            {content_contains: term},
            {hashtags_some: {name_contains: args.term}},
          ],
        },
      });
    },
  },
};
