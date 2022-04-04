import { increment, decrement } from "./actions"


test("action: increment", () => {
    let incr = increment(3)
    expect(incr).toEqual({
        type: 'INCREMENT',
        value: 3
    })
})

test("action: decrement", () => {
   let decr = decrement(2)
   expect(decr).toEqual({
       type: 'DECREMENT',
       value:2
   })
})