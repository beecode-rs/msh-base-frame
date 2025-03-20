import mustache from 'mustache'

import { fileService } from '#src/service/file-service'
import { config } from '#src/util/config'

export const templateService = {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	render: (template: string, templateValues: any): string => {
		return mustache.render(template, templateValues)
	},
	renderAndOverrideFile: async (filePath: string): Promise<void> => {
		const renderedContent = await templateService.renderFile(filePath, config().template)
		await fileService.writeToFile(filePath, renderedContent)
	},
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	renderFile: async (filePath: string, templateValues: any): Promise<string> => {
		const fileContent = await fileService.readFile(filePath)

		return templateService.render(fileContent, templateValues)
	},
}
