const babelJest = require("babel-jest");

module.exports = {
  transform: {
    "^.+\\.jsx?$": babelJest.createTransformer({
      presets: [
        [
          require.resolve("babel-preset-env"),
          {
            targets: {
              node: "10"
            }
          }
        ]
      ]
    })
  }
};
