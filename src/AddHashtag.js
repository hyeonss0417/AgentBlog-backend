import {prisma} from "../generated/prisma-client";

const AddHashtag = (postId, hashtags) => {
  hashtags.forEach(async (hashtag) => {
    try {
      const existingHashtag = await prisma.$exists.hashtag({name: hashtag});

      if (existingHashtag) {
        await prisma.updateHashtag({
          where: {name: hashtag},
          data: {
            posts: {
              connect: {
                id: postId,
              },
            },
          },
        });
      } else {
        await prisma.createHashtag({
          name: hashtag,
          posts: {
            connect: {
              id: postId,
            },
          },
        });
      }
      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  });
};
export default AddHashtag;
