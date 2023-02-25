/**
 * @jest-environment jsdom
 */

import { 
    randomIntGenerator, 
    randomString
} from '../random'

describe('Tests random sevice returns correctly', () => {
    describe('randomString', () => {
        it('should return a sting', () => {
            const result = randomString(12)

            expect(typeof(result)).toEqual('string')
        });

        it('should return a sting with expected length', () => {
            const result = randomString(12)
            const expected = 12

            expect(result).toHaveLength(expected)
        })

        it('should return different strings', () => {
            const resultA = randomString(12)
            const resultB = randomString(12)
            const areResultsEqual = resultA === resultB

            expect(areResultsEqual).toBe(false)
        })
    })

    describe('randomIntGenerator', () => {
        it('.next().value should return a sting', () => {
            const generator = randomIntGenerator(11, 22);
            const result = generator.next().value

            expect(typeof(result)).toEqual('number')
        });

        it('.next().value should return a result in expected range', () => {
            const generator = randomIntGenerator(11, 22)
            const result = generator.next().value
            const isResultCorrect = 11 <= result && 22 >= result

            expect(isResultCorrect).toBe(true)
        })
    })
})