import {prisma} from "../../../../generated/prisma-client";

export default {
  Query: {
    searchPost: async (_, args) =>
      await prisma.hashtag({name: args.name}).posts(),
  },
};
