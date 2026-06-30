import { ContractReporter } from '@beecode/msh-test-contractor/contract-reporter'
import { contractYamlPlugin } from '@beecode/msh-test-contractor/vitest-plugin'
import baseDefaultConfig from './vitest.config.js'
import { defineConfig, mergeConfig } from 'vite'

export default mergeConfig(
	baseDefaultConfig,
	defineConfig({
		plugins: [contractYamlPlugin()],
		test: {
			include: ['src/**/*.contract.yaml'],
			reporters: [new ContractReporter()],
		},
	})
)
