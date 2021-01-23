export default {
  render(h) {
    return h("h" + this.type, {}, this.$slots.default);
  },
  props: {
    type: {
      type: Number,
    },
  },
};
