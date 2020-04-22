function climbs(parent, args, context) {
  return context.prisma.user({ id: parent.id }).climbs();
}

module.exports = {
  climbs,
};
