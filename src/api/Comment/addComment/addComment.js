import {prisma} from "../../../../generated/prisma-client";
import {COMMENT_FRAGMENT} from "../../../fragments";

export default {
  Mutation: {
    addComment: async (_, args, {request, checkIfAuthenticated}) => {
      checkIfAuthenticated(request);
      const {text, postId} = args;
      const {user} = request;
      try {
        let comment = await prisma
          .createComment({
            user: {
              connect: {
                id: user.id,
              },
            },
            post: {
              connect: {
                id: postId,
              },
            },
            text: text,
          })
          .$fragment(COMMENT_FRAGMENT);
        return comment;
      } catch (err) {
        console.log(err);
      }
    },
  },
};
