import {prisma} from "../../../../generated/prisma-client";

export default {
  Mutation: {
    createAccount: async (_, args) => {
      const {username, email, firstName = "", lastName = "", bio = ""} = args;
      const email_exist = await prisma.$exists.user({email});
      const username_exist = await prisma.$exists.user({username});
      if (email_exist) {
        throw Error("동일한 이메일이 이미 존재합니다.");
      }
      if (username_exist) {
        throw Error("동일한 유저이름이 이미 존재합니다.");
      }
      await prisma.createUser({
        username,
        email,
        firstName,
        lastName,
        bio,
      });
      return true;
    },
  },
};
