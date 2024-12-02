import { inputParser } from '@helpers/fileReader'

function getInput() {
	const dataByLine = inputParser('2024/day2/input.txt') as string[]
	const data: Array<number[]> = []

	dataByLine.forEach((el) => {
		const row = el.split(/\s+/).map((el) => +el)

		data.push(row)
	})

	return data
}

//* 1st solution
// function isSafeRow(data: number[]) {
// 	let increase = 0,
// 		decrease = 0
// 	for (let i = 0; i < data.length - 1; i++) {
// 		if (data[i] > data[i + 1]) {
// 			decrease++
// 		} else {
// 			increase++
// 		}
// 		const value = Math.abs(data[i] - data[i + 1])
// 		if (value > 3 || value === 0) {
// 			return false
// 		}
// 	}

// 	if (increase === data.length - 1 || decrease === data.length - 1) {
// 		return true
// 	}

// 	return false
// }

// function getTotalSafeRow(arr: Array<number[]>) {
// 	let total = 0
// 	for (let i = 0; i < arr.length; i++) {
// 		if (isSafeRow(arr[i])) {
// 			total++
// 		}
// 	}

// 	return total
// }

//* 2nd solution
function isSafeRow(data: number[]) {
	let increase = 0,
		decrease = 0,
		zeros = 0
	for (let i = 0; i < data.length - 1; i++) {
		if (data[i] >= data[i + 1]) {
			decrease++
		} else {
			increase++
		}
		const value = Math.abs(data[i] - data[i + 1])
		if (value === 0) zeros++
		if (value > 3) {
			return false
		}
	}

	const dataLength = data.length - 1

	if (
		(increase === dataLength && zeros <= 1) ||
		(decrease === dataLength && zeros <= 1)
	) {
		return true
	} else if (
		(increase === dataLength - 1 && zeros !== 1) ||
		(decrease === dataLength - 1 && zeros !== 1)
	) {
		return true
	}

	return false
}

function getTotalSafeRow(arr: Array<number[]>) {
	let total = 0
	for (let i = 0; i < arr.length; i++) {
		if (isSafeRow(arr[i])) {
			total++
		}
	}

	return total
}

console.log(getTotalSafeRow(getInput()))
