import {prisma} from "../../../generated/prisma-client";

export default {
  User: {
    isSelf: (parent, _, {request}) => parent.id === request.user.id,
    postsCount: (parent) => {
      return parent.posts ? parent.posts.length : 0;
    },
  },
};
