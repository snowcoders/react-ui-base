import webpack from "webpack";

const config: webpack.Configuration = {
  entry: {
    main: "./src/index.tsx"
  },
  output: {
    chunkFilename: "[name].js",
    filename: "[name].js",
    path: __dirname + "/dist",
    publicPath: "/dist/"
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".json", ".html", ".js.mem"]
  },

  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      { loader: "awesome-typescript-loader", test: /\.tsx?$/ },

      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { enforce: "pre", loader: "source-map-loader", test: /\.js$/ },

      // All scss files
      {
        test: /\.s?css$/,
        use: [
          {
            loader: "style-loader" // creates style nodes from JS strings
          },
          {
            loader: "css-loader" // translates CSS into CommonJS
          },
          {
            loader: "sass-loader" // compiles Sass to CSS
          }
        ]
      }
    ]
  },

  // When importing a module whose path matches one of the following, just
  // assume a corresponding global variable exists and use that instead.
  // This is important because it allows us to avoid bundling all of our
  // dependencies, which allows browsers to cache those libraries between builds.
  externals: {
    "react-dom": "ReactDOM",
    react: "React"
  },

  plugins: [new webpack.HotModuleReplacementPlugin()]
};

export default config;
