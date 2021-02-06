import {generateSecret, sendSecretMail} from "../../../utils";
import {prisma} from "../../../../generated/prisma-client";

export default {
  Mutation: {
    requestSecret: async (_, args) => {
      const {email} = args;
      const exist = await prisma.$exists.user({email});
      if (!exist) {
        console.log("No user");
        return false;
      }
      const loginSecret = generateSecret();
      try {
        await sendSecretMail(email, loginSecret);
        await prisma.updateUser({data: {loginSecret}, where: {email}});
        return true;
      } catch (err) {
        console.log(err);
        return false;
      }
    },
  },
};
