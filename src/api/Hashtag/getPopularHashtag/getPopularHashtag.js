import {prisma} from "../../../../generated/prisma-client";

export default {
  Query: {
    getPopularHashtag: async (_, args) => {
      const hashtags = await prisma.hashtags();
      hashtags.sort((a, b) => b.postsCount - a.postsCount);
      return hashtags.slice(0, 20);
    },
  },
};
