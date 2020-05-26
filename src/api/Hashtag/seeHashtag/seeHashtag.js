import {prisma} from "../../../../generated/prisma-client";

export default {
  Query: {
    searchHashtag: (_, args) => {
      return prisma.hashtag({name: args.name}).posts();
    },
  },
};
