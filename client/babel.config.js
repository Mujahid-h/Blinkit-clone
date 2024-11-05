module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src"],
          alias: {
            "@components": "./src/components",
            "@assets": "./src/assets",
            "@state": "./src/state",
            "@utils": "./src/utils",
            "@features": "./src/features",
            "@service": "./src/service",
            "@navigation": "./src/navigation",
            "@styles": "./src/styles",
            // Add more aliases as needed
          },
        },
      ],
    ],
  };
};
