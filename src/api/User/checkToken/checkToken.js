export default {
  Query: {
    checkToken: (_, __, {request}) => {
      console.log("Cookies:", request.cookies);
      console.log("User:", request.headers);
      if (!request.user) {
        return false;
      }
      return true;
    },
  },
};
