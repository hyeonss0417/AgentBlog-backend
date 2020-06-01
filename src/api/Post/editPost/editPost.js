import {prisma} from "../../../../generated/prisma-client";
import AddHashtag from "../../../AddHashtag";
import {GetUniqueUrl} from "../../../GetUniqueUrl";

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
        series_id = null,
        files,
        thumbnail = null,
        action,
      } = args;
      const {user} = request;
      const url = await GetUniqueUrl(user.username, args.url);

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
              content,
              url,
              thumbnail,
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
          AddHashtag(id, newHashtags);

          //File upsert
          let existingFiles = await prisma.post({id}).files();
          existingFiles = existingFiles.map((file) => file.url);

          const removedFiles = existingFiles.filter(
            (url) => !files.includes(url)
          );

          await prisma.deleteManyFiles({post: {id}, url_in: removedFiles});

          const newFiles = files.filter((url) => !existingFiles.includes(url));

          newFiles.forEach(async (file) => {
            await prisma.createFile({
              url: file,
              post: {
                connect: {
                  id,
                },
              },
            });
          });

          //console.log(existingFiles, removedFiles, newFiles);

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
