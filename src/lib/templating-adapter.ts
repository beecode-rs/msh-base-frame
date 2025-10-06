import Handlebars from 'handlebars'
import HandlebarsHelpers from 'handlebars-helpers'

HandlebarsHelpers()

export const templatingAdapter = {
	transform: (params: { templateContent: string; variables: Record<string, unknown> }): string => {
		const { templateContent, variables } = params
		const template = Handlebars.compile(templateContent)

		return template(variables)
	},
}
