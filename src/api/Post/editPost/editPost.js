import {prisma} from "../../../../generated/prisma-client";
import {addHashtag, getUniqueUrl, sanitizeContent} from "../../../utils";

const EDIT = "EDIT";
const DELETE = "DELETE";

export default {
  Mutation: {
    editPost: async (_, args, {request, checkIfAuthenticated}) => {
      checkIfAuthenticated(request);
      const {
        id,
        title,
        hashtags,
        content,
        description = null,
        series_id = null,
        thumbnail = null,
        action,
      } = args;
      const {user} = request;
      const url = await getUniqueUrl(user.username, args.url);

      const post = await prisma.$exists.post({id, user: {id: user.id}});

      if (post) {
        if (action === EDIT) {
          let existingHashtags = await prisma.post({id}).hashtags();
          existingHashtags = existingHashtags.map((hashtag) => hashtag.name);

          const removedHashtags = existingHashtags.filter(
            (name) => !hashtags.includes(name)
          );

          const updatePostOption = {
            where: {id},
            data: {
              title,
              content: sanitizeContent(content),
              description: description,
              url,
              thumbnail: thumbnail
                ? thumbnail
                : getThumbnailFromContent(content),
              hashtags: {
                disconnect: removedHashtags.map((name) => {
                  return {name: name};
                }),
              },
            },
          };
          if (series_id) {
            updatePostOption.data.series = {
              connect: {
                id: series_id,
              },
            };
          }

          await prisma.updatePost(updatePostOption);

          const newHashtags = hashtags.filter(
            (name) => !existingHashtags.includes(name)
          );
          addHashtag(id, newHashtags);

          return prisma.post({id});
        } else if (action === DELETE) {
          return prisma.deletePost({id});
        }
      } else {
        throw Error("⚠️ You cannot edit this post. ⚠️");
      }
    },
  },
};
