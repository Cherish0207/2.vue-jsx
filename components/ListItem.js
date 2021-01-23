export default {
  props: {
    render: {
      type: Function,
    },
    item: {},
  },
  render(h) {
    return this.render(h, this.item);
  },
};
