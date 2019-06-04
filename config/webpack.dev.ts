import merge from "webpack-merge";
import config from "./webpack.common"

export default merge(config, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    contentBase:"../../dist",
    host: "0.0.0.0",
    port: 9000,
    inline: true
  }
});