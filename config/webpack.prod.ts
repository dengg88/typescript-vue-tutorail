import { DefinePlugin, LoaderOptionsPlugin } from "webpack";
import merge from "webpack-merge";
import config from "./webpack.common";
import UglifyJsPlugin from "uglifyjs-webpack-plugin"

export default merge(config, {
  mode: "production",
  optimization: {
    minimizer: [new UglifyJsPlugin()],
  },
});

// http://vue-loader.vuejs.org/en/workflow/production.html
config.plugins = (config.plugins || []).concat([
  new DefinePlugin({
    "process.env": {
      NODE_ENV: '"production"'
    }
  }),
  new LoaderOptionsPlugin({
    minimize: true
  })
]);
