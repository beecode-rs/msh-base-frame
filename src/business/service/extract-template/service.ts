export enum ExtractTemplateStrategyType {
	ZIP = 'ZIP',
	COPY = 'COPY',
}

export const extractTemplateService = {
	getStrategy: (type: ExtractTemplateStrategyType) => {
		switch (type) {
			case ExtractTemplateStrategyType.ZIP:
				// return new ExtractTemplateStrategyZip()
				break
			case ExtractTemplateStrategyType.COPY:
				// return new ExtractTemplateStrategyCopy()
				break
			default:
				throw new Error(`Unknown extract template type [${String(type)}]`)
		}
	},
}
