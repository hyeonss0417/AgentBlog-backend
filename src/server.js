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

const corsOptions = {
  origin: ["https://agent-blog-frontend.herokuapp.com/", "http://52.78.67.10/"],
  credentials: true,
};

server.express.use(logger("dev"));
server.express.use(authenticateJwt);
server.express.use(cors(corsOptions));
server.express.use(cookieParser());
server.express.post("/api/upload", uploadController);

server.start({port: PORT}, () =>
  console.log(`✅ Server running on http://localhost:${PORT}`)
);
