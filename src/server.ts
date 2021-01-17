import "reflect-metadata";
import './utils/connection';
import { buildSchema } from "type-graphql";
import { ApolloServer } from "apollo-server";
import CategoryResolver from "./graphql/category/CategoryResolver";
import VideoResolver from "./graphql/video/VideoResolver";

// initialization function
async function bootstrap() {
  // Building schema 
  const schema = await buildSchema({
    resolvers: [CategoryResolver, VideoResolver]
  });

  // Creating the GraphQL server
  const server = new ApolloServer({schema});

  // Starting the server
  server.listen({ port: 4100}, () => console.log('Running 🚀'))

}

bootstrap();