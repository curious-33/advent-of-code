import fs from 'node:fs'
import path from 'node:path'

export function inputParser(filePath: string) {
	try {
		return fs.readFileSync(path.resolve(__dirname, '../', filePath), 'utf-8')
	} catch (err) {
		return null
	}
}
