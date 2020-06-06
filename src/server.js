import "./env";
import {GraphQLServer} from "graphql-yoga";
import logger from "morgan";
import schema from "./schema";
import "./passport";
import {authenticateJwt} from "./passport";
import {checkIfAuthenticated} from "./middleware";
import {uploadController} from "./upload";
import cors from "cors";

const PORT = process.env.PORT || 4000;
const typeDefs = `
    type Query{
        hello: String!
    }
`;
const resolvers = {
  Query: {
    hello: () => "Hi",
  },
};
const server = new GraphQLServer({
  schema,
  context: ({request}) => ({request, checkIfAuthenticated}),
});

server.express.use(logger("dev"));
server.express.use(authenticateJwt);
server.express.use(cors());
server.express.post("/api/upload", uploadController);

server.start({port: PORT}, () =>
  console.log(`✅ Server running on http://localhost:${PORT}`)
);
