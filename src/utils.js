import nodemailer from "nodemailer";
import sgTransport from "nodemailer-sendgrid-transport";
import jwt from "jsonwebtoken";

import {prisma} from "../generated/prisma-client";
import createDomPurify from "dompurify";
import {JSDOM} from "jsdom";

export const generateSecret = () => {
  const secretKey = Math.random()
    .toString(36)
    .substring(2, 8)
    .toUpperCase();
  return secretKey;
};

export const sendMail = (email) => {
  const options = {
    auth: {
      api_key: process.env.SENDGRID_APIKEY,
    },
  };
  const client = nodemailer.createTransport(sgTransport(options));
  return client.sendMail(email);
};

export const sendSecretMail = (address, secret) => {
  const email = {
    from: "welcome@agentblog.com",
    to: address,
    subject: "🔐 Login Secret for AgentBlog 🔐",
    html: `Hello! Your login secret is <strong>${secret}</strong>. Copy it and paste on the app/website to login!`,
  };
  return sendMail(email);
};

export const generateToken = (id) =>
  jwt.sign({id}, process.env.JWT_SECRET, {expiresIn: "15m"});

export const generateRefreshToken = (id) =>
  jwt.sign({id}, process.env.JWT_SECRET, {expiresIn: "14d"});

export const getUniqueUrl = async (username, url) => {
  let uniqueUrl = url
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]]+/g, "")
    .replace(/#/g, "");

  let existingPost = true;
  while (existingPost) {
    existingPost = await prisma.$exists.post({
      user: {username},
      url: uniqueUrl,
    });
    if (existingPost || uniqueUrl === "") {
      uniqueUrl = url + "-" + generateSecret().toLowerCase();
    }
  }
  console.log(uniqueUrl);
  return uniqueUrl;
};

export const addHashtag = (postId, hashtags) => {
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

export const sanitizeContent = (content) => {
  const dompurify = createDomPurify(new JSDOM().window);
  return dompurify.sanitize(content);
};

export const getThumbnailFromContent = (content) => {
  const imageRegex = /!\[([^\[\]]*?)\]\((\S*?)\)/g;
  const result = imageRegex.exec(content);
  if (result === null) return null;
  else return result[2];
};
