import {prisma} from "../../../generated/prisma-client";

export default {
  Hashtag: {
    posts: (parent, _) => {
      return prisma.Hashtag({id: parent.id}).posts();
    },
  },
};
