import {prisma} from "../../../../generated/prisma-client";
import {generateToken, generateRefreshToken} from "../../../utils";

export default {
  Mutation: {
    confirmSecret: async (_, args, {response}) => {
      const {secret, email} = args;
      const user = await prisma.user({email});
      if (user.loginSecret === secret) {
        await prisma.updateUser({
          where: {id: user.id},
          data: {loginSecret: ""},
        });

        const refreshToken = generateRefreshToken(user.id);
        console.log("refreshToken");
        console.log(response);
        response.cookie("refresh_token", refreshToken, {
          //domain: '',
          expires: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000), // 2 weeks
          // secure: true,
          httpOnly: true,
        });
        console.log(refreshToken);
        return generateToken(user.id);
      } else {
        //throw Error("Wrong secret key!");
        return "";
      }
    },
  },
};
