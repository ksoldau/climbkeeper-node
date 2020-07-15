async function climbs(parent, args, context) {
  const where = args.filter
    ? {
        OR: [
          { grade_contains: args.filter },
          { tickType_contains: args.filter },
        ],
      }
    : {};

  const climbs = await context.prisma.user({ id: parent.id }).climbs({
    where,
  });

  return climbs;
}

module.exports = {
  climbs,
};
