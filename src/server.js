import "./env";
import {GraphQLServer} from "graphql-yoga";
import logger from "morgan";
import schema from "./schema";
import "./passport";
import {authenticateJwt} from "./passport";
import {checkIfAuthenticated} from "./middleware";
import {uploadController} from "./upload";
import cors from "cors";
import cookieParser from "cookie-parser";

const PORT = process.env.PORT || 4000;

const server = new GraphQLServer({
  schema,
  context: ({request, response}) => ({request, response, checkIfAuthenticated}),
});

var customCors = function(req, res, next) {
  var whitelist = [
    "https://agent-blog-frontend.herokuapp.com",
    "http://52.78.67.10",
  ];
  var origin = req.headers.origin;
  console.log(origin);
  res.setHeader("Access-Control-Allow-Origin", "www.naver.com");
  if (whitelist.indexOf(origin) > -1) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }
  res.setHeader("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  console.log(res);
  next();
};

server.express.use(customCors);
server.express.use(logger("dev"));
server.express.use(authenticateJwt);
//server.express.use(cors(corsOptions));
server.express.use(cookieParser());
server.express.post("/api/upload", uploadController);

server.start({port: PORT}, () =>
  console.log(`✅ Server running on http://localhost:${PORT}`)
);
