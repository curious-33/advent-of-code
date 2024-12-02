import { inputParser } from '@helpers/fileReader'

function getInput() {
	let stack1: number[] = [],
		stack2: number[] = []

	const dataByLine = inputParser('2024/day1/input.txt') as string[]
	dataByLine.forEach((el) => {
		const [odd, even] = el.split(/\s+/)
		stack1.push(+odd)
		stack2.push(+even)
	})

	return { stack1, stack2 }
}

//* 1st solution
// function findTotalDistanceOfSmallestValues(stack1: number[], stack2: number[]) {
// 	let totalDistance = 0
// 	stack1.sort()
// 	stack2.sort()

// 	for (let i = 0; i < stack1.length; i++) {
// 		totalDistance += Math.abs(stack1[i] - stack2[i])
// 	}

// 	return totalDistance
// }

//* 2nd solution
// function findTotalAppearedValues(stack1: number[], stack2: number[]) {
// 	let total = 0

// 	for (let i = 0; i < stack1.length; i++) {
// 		const a = stack2.filter((el) => el === stack1[i])

// 		total += stack1[i] * a.length
// 	}

// 	return total
// }
