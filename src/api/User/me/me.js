import {prisma} from "../../../../generated/prisma-client";

export default {
  Query: {
    me: async (_, __, {request, checkIfAuthenticated}) => {
      checkIfAuthenticated(request);
      const {user} = request;
      const userProfile = await prisma.user({id: user.id});
      userProfile["posts"] = await prisma.user({id: user.id}).posts();
      //console.log(userProfile);
      return userProfile;
    },
  },
};
