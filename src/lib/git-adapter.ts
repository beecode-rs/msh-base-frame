import { simpleGit } from 'simple-git'

export const gitAdapter = {
	clone: async (params: { repoUrl: string; destinationPath: string }): Promise<void> => {
		const { destinationPath, repoUrl } = params

		await simpleGit().clone(repoUrl, destinationPath)
	},
}
