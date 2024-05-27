import { ENV } from "../../env";
import redisClient from "../cache/redisClient";
import { filterRepositoriesByStar } from "./utils/utils";

class RepositoriesGithubController {
	private urlBaseGitHub = "https://api.github.com";
	private org = "google";

	// This token is only for personal use, it does not have permissions
	// for anything and will only be used for testing. In a real scenario, it should be as an environment variable
	private GITHUB_TOKEN = ENV.GITHUB_TOKEN;

	constructor() {}

	async getPopularRepositories(request: Request, h: any): Promise<any> {
		const client = redisClient;
		const cacheRepositories = await client.get("repositories");

		if (cacheRepositories) {
			return h.response({
				statusCode: 200,
				repositories: JSON.parse(cacheRepositories),
			});
		}

		try {
			const repositories = await fetch(
				`${this.urlBaseGitHub}/users/${this.org}/repos`,
				{
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${this.GITHUB_TOKEN}`,
					},
				}
			);

			const repositoriesJson = await repositories.json();

			if (!repositoriesJson) {
				return h.response({
					statusCode: 404,
					message: "Repositories not found",
				});
			}

			const repositoriesFilter = await filterRepositoriesByStar(
				repositoriesJson
			);

			client.set("repositories", JSON.stringify(repositoriesFilter));

			return h
				.response({
					statusCode: 200,
					repositories: repositoriesFilter,
					numberRepositories: repositoriesJson,
				})
				.code(200);
		} catch (error) {
			return h.response({
				statusCode: 500,
				message: "Internal Server Error" + error,
			});
		}
	}
}

export default new RepositoriesGithubController();
