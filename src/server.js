import "./env";
import logger from "morgan";
import schema from "./schema";
import "./passport";
import {authenticateJwt} from "./passport";
import {checkIfAuthenticated} from "./middleware";
import {uploadController} from "./upload";
import cookieParser from "cookie-parser";
import express from "express";
import {ApolloServer} from "apollo-server-express";
const PORT = process.env.PORT || 4000;

const app = express();

const aserver = new ApolloServer({
  schema,
  context: ({request, response}) => ({request, response, checkIfAuthenticated}),
});

app.use(logger("dev"));
app.use(authenticateJwt);
app.use(cookieParser());
app.post("/api/upload", uploadController);

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Methods", "GET,POST");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  next();
});

aserver.applyMiddleware({
  app,
  path: "/",
  cors: {
    origin: [
      "https://agent-blog-frontend.herokuapp.com",
      "http://52.78.67.10",
      "http://localhost:3000",
    ],
  },
});

app.listen({port: PORT}, () =>
  console.log(`✅ Server running on http://localhost:${PORT}`)
);
