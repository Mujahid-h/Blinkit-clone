module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "react-native-reanimated/plugin",
      [
        "module-resolver",
        {
          root: ["./src"],
          alias: {
            "@customComponent": "./src/components",
            "@assets": "./src/assets",
            "@state": "./src/state",
            "@utils": "./src/utils",
            "@features": "./src/features",
            "@service": "./src/service",
            "@styles": "./src/styles",
            "@": "./",
            // Add more aliases as needed
          },
        },
      ],
    ],
  };
};
