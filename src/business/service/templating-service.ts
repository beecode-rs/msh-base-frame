import { FileAdapter } from '#src/lib/file-adapter'
import { templatingAdapter } from '#src/lib/templating-adapter'
import { config } from '#src/util/config'

export class TemplatingService {
	async renderAndOverrideFile(params: { filePath: string }): Promise<void> {
		const { filePath } = params

		const renderedContent = await this.renderFile({ filePath, templateValues: config().variables })

		await new FileAdapter().writeToFile({ fileContent: renderedContent, filePath })
	}

	async renderFile(params: { filePath: string; templateValues: Record<string, unknown> }): Promise<string> {
		const { filePath, templateValues } = params

		const fileContent = await new FileAdapter().readFile({ filePath })

		return templatingAdapter.transform({ templateContent: fileContent, variables: templateValues })
	}
}
