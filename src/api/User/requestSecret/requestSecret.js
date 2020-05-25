import {generateSecret, sendSecretMail} from "../../../utils";
import {prisma} from "../../../../generated/prisma-client";

export default {
  Mutation: {
    requestSecret: async (_, args) => {
      const {email} = args;
      console.log(loginSecret);
      const exist = await prisma.$exists.user({email});
      if (!exist) {
        return false;
      }
      const loginSecret = generateSecret();
      try {
        await sendSecretMail(email, loginSecret);
        await prisma.updateUser({data: {loginSecret}, where: {email}});
        return true;
      } catch {
        return false;
      }
    },
  },
};
