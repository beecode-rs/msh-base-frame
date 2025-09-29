import os from 'os'

export const stringUtil = {
	generateRandomTmpFolderName: (): string => {
		return `${os.tmpdir()}/base-frame-${new Date().getTime().toString()}/`
	},
}
