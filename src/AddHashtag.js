import {prisma} from "../generated/prisma-client";

const AddHashtag = (postId, hashtags) => {
  hashtags.forEach(async (hashtag) => {
    try {
      const existingHashtag = await prisma.hashtag({name: hashtag});

      if (existingHashtag) {
        await prisma.updateHashtag({
          where: {name: hashtag},
          data: {
            posts: {
              connect: {
                id: postId,
              },
            },
            postsCount: existingHashtag.postsCount + 1,
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
          postsCount: 0,
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
