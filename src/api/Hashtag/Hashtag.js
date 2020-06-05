import {prisma} from "../../../generated/prisma-client";

export default {
  Hashtag: {
    posts: (parent, _) => {
      return prisma.hashtag({id: parent.id}).posts();
    },
  },
};
