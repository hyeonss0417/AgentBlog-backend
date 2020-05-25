import { GraphQLServer } from "graphql-yoga";
import logger from "morgan";
import schema from "./schema";

const server = new GraphQLServer({ schema });
server.express.use(logger("dev"));
