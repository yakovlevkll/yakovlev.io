/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  webpack: (config, { webpack }) => {
    config.resolve["fallback"] = {
      console: false,
      path: false,
    };

    config.plugins.push(
      new webpack.ProvidePlugin({
        React: "react",
      })
    );
    // require.resolve('console-browserify'),

    return config;
  },
};
