function postedBy(parent, args, context) {
  return context.prisma.climb({ id: parent.id }).postedBy();
}

module.exports = {
  postedBy,
};
