import { sum, difference } from "../src/utils/math.utils";

describe('testing math module', () => {
    test('sum', () => {
        expect(sum(1,2)).toBe(3)
    })
    test('difference', () => {
        expect(difference(2,1)).toBe(1)
    })
})
