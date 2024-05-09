import { ApolloServer, gql } from "apollo-server";

const typeDefs = gql`
  type Query {
    qqq: String
  }
`;

const resolvers = {
  Query: {
    qqq: () => {
      return "Hello World!";
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});