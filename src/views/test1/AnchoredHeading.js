export default {
  name: "AnchoredHeading",
  functional: true,
  render: function(h, context) {
    console.log("AnchoredHeading", context);

    return h(
      "h" + context.props.level, // 标签名称
      context.children //子节点数组
    );
  },
  props: {
    level: {
      type: Number,
    },
  },
};
