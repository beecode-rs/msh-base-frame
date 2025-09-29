import mustache from 'mustache'

export const templatingAdapter = {
	transform: (params: { templateContent: string; variables: Record<string, unknown> }): string => {
		const { templateContent, variables } = params

		return mustache.render(templateContent, variables)
	},
}
