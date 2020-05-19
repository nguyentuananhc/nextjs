const path = require("path");
const SWPrecacheWebpackPlugin = require("sw-precache-webpack-plugin");
const FilterWarningsPlugin = require("webpack-filter-warnings-plugin");
const withSass = require("@zeit/next-sass");
const webpack = require("webpack");
const { parsed: Env } = require("dotenv").config();

module.exports = withSass({
	// distDir: "../.dist",
	// useFileSystemPublicRoutes: true,
	webpack: (config, { dev, defaultLoaders }) => {

		config.module.rules.push({
			test: /\.+(js)$/,
			loader: defaultLoaders.babel,
			include: path.resolve(__dirname, "../src"),
		});

		config.plugins.push(
			new FilterWarningsPlugin({
				exclude: /mini-css-extract-plugin[^]*Conflicting order between:/,
			})
		);

		config.plugins.push(
			new webpack.ProvidePlugin({
				$: "jquery",
				jQuery: "jquery",
			})
		);

		// config.plugins.push(new webpack.EnvironmentPlugin(Env || "development"));
		config.plugins.push(new webpack.EnvironmentPlugin(Env));

		return config;
	},
});
