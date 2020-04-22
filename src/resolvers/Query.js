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

module.exports = {
  climbs,
};
