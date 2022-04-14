// here i am created action to incremnet and decrement value

export const increment= (value)=>{
  return{
    type:'INCREMENT',
    value:value
   }
}
export const  decrement= (value) => {
    return {
    type:'DECREMENT',
    value: value
    }
}