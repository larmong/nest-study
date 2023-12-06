import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

// schema
const typeDefs = `#graphql
  type Query {
    qqq: String
  }
`;

// api
const resolvers = {
  Query: {  // get:read
    qqq: () => {
      return "hiiiiii!!!!!!"
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server);
console.log(`🚀 Server ready at ${url}`);