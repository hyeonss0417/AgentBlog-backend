import {prisma} from "../../../../generated/prisma-client";

export default {
  Query: {
    getSeries: async (_, args, {request, checkIfAuthenticated}) => {
      const {username = null} = args;

      if (username) {
        return prisma.serieses({where: {user: {username}}});
      }

      checkIfAuthenticated(request);
      const {user} = request;
      return prisma.serieses({where: {user: {username: user.username}}});
    },
  },
};
