import {prisma} from "../../../../generated/prisma-client";

const EDIT = "EDIT";
const DELETE = "DELETE";

export default {
  Mutation: {
    editSeries: async (_, args, {request, checkIfAuthenticated}) => {
      checkIfAuthenticated(request);
      const {prevTitle, newTitle} = args;
      const {user} = request;
      try {
        if (args.action == EDIT) {
          const existSeries = await prisma.$exists.series({
            title: newTitle,
            user: {id: user.id},
          });

          if (existSeries) {
            return false;
          } else {
            await prisma.updateManySerieses({
              where: {title: prevTitle, user: {id: user.id}},
              data: {title: newTitle},
            });
            return true;
          }
        } else {
          return prisma.deleteSeries({
            where: {title: prevTitle},
          });
        }
      } catch (e) {
        console.log(e);
      }
    },
  },
};
