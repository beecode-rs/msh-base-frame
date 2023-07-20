import mustache from 'mustache'

import { fileService } from '#/service/file-service.js'
import { config } from '#/util/config.js'

export const templateService = {
	render: (template: string, templateValues: any): string => {
		return mustache.render(template, templateValues)
	},
	renderAndOverrideFile: async (filePath: string): Promise<void> => {
		const renderedContent = await templateService.renderFile(filePath, config().template)
		await fileService.writeToFile(filePath, renderedContent)
	},
	renderFile: async (filePath: string, templateValues: any): Promise<string> => {
		const fileContent = await fileService.readFile(filePath)

		return templateService.render(fileContent, templateValues)
	},
}
