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

// const corsOptions = {
//   origin: function (origin, callback) {
//     const whiteList = ["https://agent-blog-frontend.herokuapp.com", "http://52.78.67.10"];
//     whiteList.indexOf
//     db.loadOrigins(function (error, origins) {
//       callback(error, origins)
//     })
//   },
//   credentials: true,
// };

var customCors = function(req, res, next) {
  var whitelist = [
    "https://agent-blog-frontend.herokuapp.com",
    "http://52.78.67.10",
  ];
  var origin = req.headers.origin;
  if (whitelist.indexOf(origin) > -1) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }
  res.setHeader("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type,Authorization,X-Requested-With"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
};

server.express.use(logger("dev"));
server.express.use(authenticateJwt);
//server.express.use(cors(corsOptions));
server.express.use(customCors);
server.express.use(cookieParser());
server.express.post("/api/upload", uploadController);

server.start({port: PORT}, () =>
  console.log(`✅ Server running on http://localhost:${PORT}`)
);
