const { getUserId } = require("../utils");

async function climbs(parent, args, context, info) {
  const where = args.filter
    ? {
        OR: [
          { grade_contains: args.filter },
          { tickType_contains: args.filter },
        ],
      }
    : {};

  const climbs = await context.prisma.climbs({
    where,
  });

  return climbs;
}

async function climb(parent, args, context, info) {
  const climbs = await context.prisma.climbs();
  return climbs.find(user => user.id === args.id);
}

async function user(parent, args, context, info) {
  const userId = getUserId(context);
  const users = await context.prisma.users();
  return users.find(user => user.id === userId);
}

module.exports = {
  climbs,
  climb,
  user,
};
