// NOTE: Following this tutorial
// https://www.howtographql.com/graphql-js/6-authentication/

const { GraphQLServer } = require("graphql-yoga");
const { prisma } = require("./generated/prisma-client");
const Query = require("./resolvers/Query");
const Mutation = require("./resolvers/Mutation");
const Subscription = require("./resolvers/Subscription");
const User = require("./resolvers/User");
const Climb = require("./resolvers/Climb");

const resolvers = {
  Query,
  Mutation,
  Subscription,
  User,
  Climb,
};

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers,
  context: (request) => {
    return { ...request, prisma };
  },
});

server.start(() => console.log(`Server is running on http://localhost:4000`));

// left off here: https://www.howtographql.com/graphql-js/2-a-simple-query/
