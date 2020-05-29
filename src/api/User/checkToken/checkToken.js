export default {
  Query: {
    checkToken: (_, __, {request}) => {
      if (!request.user) {
        return false;
      }
      return true;
    },
  },
};
