import path from 'node:path'

import { coverageConfigDefaults, defineConfig } from 'vitest/config'

const projectRoot = import.meta.dirname
const srcDir = path.resolve(projectRoot, 'src')

export default defineConfig({
	plugins: [
		{
			name: 'resolve-local-src-alias',
			enforce: 'pre',
			async resolveId(source, importer) {
				// Rewrite the package-private '#src' alias only for files inside
				// this package. Symlinked workspace deps (e.g. @beecode/msh-logger)
				// ship a dist/package.json 'imports' field that resolves their own
				// '#src' imports — a global alias would hijack those and break them.
				if (!source.startsWith('#src')) return null
				if (!importer || !importer.startsWith(projectRoot) || importer.includes('/node_modules/')) return null
				const target = source === '#src' ? srcDir : path.join(srcDir, source.slice('#src/'.length))
				return (await this.resolve(target, importer, { skipSelf: true })) ?? target
			},
		},
	],
	resolve: {
		tsconfigPaths: true,
	},
	test: {
		coverage: {
			exclude: [...coverageConfigDefaults.exclude],
		},
		mockReset: true,
		passWithNoTests: true,
		setupFiles: ['./src/index-vitest-setup.ts'],
		watch: false,
	},
})
