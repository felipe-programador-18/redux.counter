import counterReducer from "./reducer"


// this case am testing about reducer
test('counterReducer', ()=>{
    let state ;
    state = counterReducer({count:0}, {type:'INCREMENT', value:3})
    expect(state).toEqual({count:3})
})

test('decrement', () => {
    let state ;
    state = counterReducer({count:1}, {type:'DECREMENT', value:2})
    expect(state).toEqual({count:-1})
})