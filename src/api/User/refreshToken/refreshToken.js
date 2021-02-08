import jwt from "jsonwebtoken";
import {generateToken} from "../../../utils";

export default {
  Query: {
    refreshToken: (_, __, {request}) => {
      // console.log("Cookies:", request.cookies);
      const refreshToken = request.cookies.refresh_token;
      if (!refreshToken) return "";
      const decodedToken = jwt.verify(refreshToken, process.env.JWT_SECRET);
      console.log(decodedToken);
      const userId = decodedToken.id.slice(1);
      // console.log(userId);
      return generateToken(userId);
    },
  },
};
