import {prisma} from "../../../../generated/prisma-client";
import {generateToken} from "../../../utils";

export default {
  Mutation: {
    confirmSecret: async (_, args) => {
      const {secret, email} = args;
      const user = await prisma.user({email});
      if (user.loginSecret === secret) {
        await prisma.updateUser({
          where: {id: user.id},
          data: {loginSecret: ""},
        });
        return generateToken(user.id);
      } else {
        //throw Error("Wrong secret key!");
        return "";
      }
    },
  },
};
