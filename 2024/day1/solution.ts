import { inputParser } from './parser'

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

// const { stack1, stack2 } = inputParser()

// console.log(findTotalDistanceOfSmallestValues(stack1, stack2))

//* 2nd solution
// function findTotalAppearedValues(stack1: number[], stack2: number[]) {
// 	let total = 0

// 	for (let i = 0; i < stack1.length; i++) {
// 		const a = stack2.filter((el) => el === stack1[i])

// 		total += stack1[i] * a.length
// 	}

// 	return total
// }

// const { stack1, stack2 } = inputParser()

// console.log(findTotalAppearedValues(stack1, stack2))
