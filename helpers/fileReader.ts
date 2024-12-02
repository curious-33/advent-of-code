import fs from 'node:fs'
import path from 'node:path'

export function inputParser(filePath: string) {
	try {
		const data = fs.readFileSync(
			path.resolve(__dirname, '../', filePath),
			'utf-8'
		)
		const dataByLine = data.split('\n')

		return dataByLine
	} catch (err) {
		return null
	}
}
