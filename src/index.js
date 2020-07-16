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

const typeDefs = `
type Query {
  info: String!
  feed: [Climb!]!
}

type Climb {
  id: ID!
  color: String!
  gym: String!
  tick: String!
}
`;

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
  typeDefs,
  resolvers,
});
server.start(() => console.log(`Server is running on http://localhost:4000`));
