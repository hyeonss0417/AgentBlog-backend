export default {
  Query: {
    checkToken: (_, __, {request}) => {
      console.log("Cookies:");
      console.log(request.cookies);
      if (!request.user) {
        return false;
      }
      return true;
    },
  },
};
