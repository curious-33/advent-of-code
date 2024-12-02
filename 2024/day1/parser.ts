import fs from 'node:fs'

export function inputParser() {
	try {
		let stack1: number[] = [],
			stack2: number[] = []
		const data = fs.readFileSync('2024/day1/input.txt', 'utf-8')
		const dataByLine = data.split('\n')

		dataByLine.forEach((el) => {
			const [odd, even] = el.split(/\s+/)
			stack1.push(+odd)
			stack2.push(+even)
		})

		return { stack1, stack2 }
	} catch (err) {
		return { stack1: [], stack2: [] }
	}
}
