export default {
  Query: {
    checkToken: (_, __, {request}) => {
      console.log("Cookies:", request.cookies);
      if (!request.user) {
        return false;
      }
      return true;
    },
  },
};
