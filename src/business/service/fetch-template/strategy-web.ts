import { type FetchTemplateStrategy } from '#src/business/service/fetch-template/strategy'

export class FetchTemplateStrategyWeb implements FetchTemplateStrategy {
	fetch(): Promise<void> {
		throw new Error('Method not implemented.')
	}
}
