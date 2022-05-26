const chunkArr = require("./chunk")

test("Chunk function exists", () => {
    expect(chunkArr).toBeDefined()
})

test("chunk array of 10 eleents with length of 2", () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const len = 2;
    const chunkedArr = chunkArr(numbers, len)

    expect(chunkedArr).toEqual([[1, 2], [3, 4], [5, 6], [7, 8], [9, 10]])
})