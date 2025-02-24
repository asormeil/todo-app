import { it, expect } from "vitest"
import { transformToNumber } from "./math"

it("should pass when it is a number", () => {
  const expectedOutput = transformToNumber(2)
  expect(expectedOutput).toBeTypeOf("number")
})

it("should throw error when input is nan", () => {
  const input = "invalid"
  expect(transformToNumber(input)).toBeNaN()
})
