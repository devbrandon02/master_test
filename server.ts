"use strict";

import repositoriesControllers from "./app/controllers/repositories.controllers";

const Hapi = require("@hapi/hapi");

const init = async () => {
	const server = Hapi.server({
		port: 8080,
	});

	server.route({
		method: "GET",
		path: "/api/repositories/popular",
		handler: async (request: Request, h: any) => {
			return await repositoriesControllers.getPopularRepositories(request, h);
		},
	});

	await server.start();
	console.log("✅ Server running on %s", server.info.uri);
};

process.on("unhandledRejection", (err) => {
	console.log(err);
	process.exit(1);
});

init();
