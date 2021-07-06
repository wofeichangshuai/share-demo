import AnchoredHeading from "./AnchoredHeading.js";
import RenderD from "./renderD.js";
export default {
  name: "RenderC",
  components: {
    AnchoredHeading,
    RenderD,
  },
  data() {
    return {
      level: 4,
    };
  },
  render: function(h) {
    return (
      <div>
        <anchored-heading level={this.level}>
          <span>Hello</span> world!
        </anchored-heading>
        <render-d></render-d>
      </div>
    );
  },
};
