import {prisma} from "../../../../generated/prisma-client";

export default {
  Query: {
    seeUser: async (_, args) => {
      const {username} = args;
      const user = await prisma.user({username});
      user["posts"] = await prisma.user({username}).posts();
      return user;
    },
  },
};
