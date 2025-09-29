import extractZip from 'extract-zip'

export const zipAdapter = {
	unzip: async (params: { absoluteSourcePath: string; absoluteDestinationPath: string }): Promise<void> => {
		const { absoluteDestinationPath, absoluteSourcePath } = params

		await extractZip(absoluteSourcePath, { dir: absoluteDestinationPath })
	},
}
