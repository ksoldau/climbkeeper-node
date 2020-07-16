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

let idCount = climbs.length;
const resolvers = {
  Query: {
    info: () => `Info`,
    feed: () => climbs,
    climb: (parent, args) => {
      return climbs.find((c) => c.id === args.id);
    },
  },
  Mutation: {
    post: (parent, args) => {
      const climb = {
        id: `climb-${idCount++}`,
        color: args.color,
        gym: args.gym,
        tick: args.tick,
      };
      climbs.push(climb);
      return climb;
    },
    updateClimb: (parent, args) => {
      const climb = climbs.find((c) => c.id === args.id);
      if (args.color) {
        climb.color = args.color;
      }
      if (args.gym) {
        climb.gym = args.gym;
      }
      if (args.tick) {
        climb.tick = args.tick;
      }

      return climb;
    },
  },
};

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers,
});
server.start(() => console.log(`Server is running on http://localhost:4000`));
