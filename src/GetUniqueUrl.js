import {generateSecret} from "./utils";
import {prisma} from "../generated/prisma-client";

export const GetUniqueUrl = async (username, url) => {
  let uniqueUrl = url;

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