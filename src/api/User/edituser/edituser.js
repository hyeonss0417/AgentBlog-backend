import {prisma} from "../../../../generated/prisma-client";

export default {
  Mutation: {
    editUser: (_, args, {request, checkIfAuthenticated}) => {
      checkIfAuthenticated(request);
      const {username, blogname, email, bio, avatar} = args;
      const {user} = request;
      return prisma.updateUser({
        where: {id: user.id},
        data: {username, blogname, email, bio, avatar},
      });
    },
  },
};
