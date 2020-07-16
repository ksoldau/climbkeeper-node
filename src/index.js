const { GraphQLServer } = require("graphql-yoga");

const climbs = [
  {
    id: "climb-0",
    color: "blue",
    gym: "Northcote Northside",
    tick: "flash",
  },
  {
    id: "climb-1",
    color: "red",
    gym: "Northcote Northside",
    tick: "send",
  },
];

const resolvers = {
  Query: {
    info: () => `Info`,
    feed: () => climbs,
  },
  Climb: {
    id: (parent) => parent.id,
    color: (parent) => parent.color,
    gym: (parent) => parent.gym,
    tick: (parent) => parent.tick,
  },
};

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers,
});
server.start(() => console.log(`Server is running on http://localhost:4000`));
