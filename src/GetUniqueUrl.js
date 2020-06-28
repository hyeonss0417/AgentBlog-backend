import {generateSecret} from "./utils";
import {prisma} from "../generated/prisma-client";
import slugify from "slugify";

export const GetUniqueUrl = async (username, url) => {
  let uniqueUrl = slugify(url, {
    lower: true,
    strict: true,
    useCreateIndex: true,
  });

  let existingPost = true;
  while (existingPost) {
    existingPost = await prisma.$exists.post({
      user: {username},
      url: uniqueUrl,
    });
    if (existingPost) {
      uniqueUrl = url + "-" + generateSecret().toLowerCase();
    }
  }
  return uniqueUrl;
};
