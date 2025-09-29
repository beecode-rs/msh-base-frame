import eslintNode from '@beecode/msh-config/src/eslint-config.mjs'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
	globalIgnores([
		'.base-frame-template',
		'.idea',
		'.semaphore',
		'coverage',
		'dist',
		'lib',
		'node_modules',
		'resource',
		'packages',
		'.*.js',
		'.*.json',
		'package-lock.json',
		'tsconfig*.json',
		'typedoc.json',
		'jest.config*.ts',
		'eslint.config.js',
		'babel.config.cjs',
		'release.config.cjs',
		'bin/msh-base.js',
	]),
	...eslintNode,
])
