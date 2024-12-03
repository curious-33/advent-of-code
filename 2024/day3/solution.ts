import { inputParser } from '@helpers/fileReader'

const getInput = () => inputParser('2024/day3/input.txt') as string

function mul(x: number, y: number) {
	return x * y
}

function findUncorruptedMulFunctions(data: string) {
	let total = 0
	const regex = /mul\(\d{1,3},\d{1,3}\)/g
	const mulFns = data.match(regex) || []

	mulFns
		.map((el) => el.split(/mul\(|\)/))
		.map((el) => el[1].split(','))
		.forEach((el) => {
			total += mul(+el[0], +el[1])
		})

	return total
}

console.log(findUncorruptedMulFunctions(getInput()))
