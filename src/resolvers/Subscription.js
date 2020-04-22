function newClimbSubscribe(parent, args, context, info) {
  return context.prisma.$subscribe.climb({ mutation_in: ["CREATED"] }).node();
}

const newClimb = {
  subscribe: newClimbSubscribe,
  resolve: (payload) => {
    return payload;
  },
};

module.exports = {
  newClimb,
};
