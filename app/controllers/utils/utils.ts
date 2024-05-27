export const filterRepositoriesByStar = (repositories: any) => {
	return repositories.sort(
		(a: any, b: any) => b.stargazers_count - a.stargazers_count
	);
};
