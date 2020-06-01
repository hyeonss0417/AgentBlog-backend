import {prisma} from "../../../../generated/prisma-client";

export default {
  Mutation: {
    addSeries: async (_, args, {request, checkIfAuthenticated}) => {
      checkIfAuthenticated(request);
      const {user} = request;
      const {title} = args;
      const existSeries = await prisma.$exists.series({
        title,
        user: {id: user.id},
      });

      if (existSeries) {
        return false;
      } else {
        return prisma.createSeries({
          title,
          user: {connect: {id: user.id}},
        });
      }
    },
  },
};
