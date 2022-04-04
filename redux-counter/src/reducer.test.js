import counterReducer from "./reducer"

test('counterReducer', ()=>{
    let state ;
    state = counterReducer({count:0}, {type:'INCREMENT', value:3})
    expect(state).toEqual({count:3})
})