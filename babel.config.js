module.exports = (api) => {
	api.cache(true);
	return {
		presets: [["babel-preset-expo", { jsxRuntime: "automatic" }]],
		plugins: ["nativewind/babel", "expo-router/babel"],
	};
};
