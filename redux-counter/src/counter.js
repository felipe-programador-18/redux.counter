
import React, {Component} from "react"
import { connect } from "react-redux"
import { increment, decrement} from "./actions"

const Counter = ({count, increment, decrement}) =>{
   return(
     <p>
       Contador: {count}
       <button onClick={ ()=> increment(3)} >+</button>
       <button onClick={ ()=> decrement (2)}>-</button>
     </p>
   )
}

//class Counter extends Component{
 // render(){
 // return( 
   //     <p>Contador: {this.props.count}
     //    <button onClick={this.props.increment} >+</button> 
       //  <button onClick={this.props.decrement} >-</button> 
       // </p>    
   
 //   )}
//}

// now i am mapnig state !!
const mapStatetoProps = (state) =>{
  return {
      count: state.count
  }
}

const mapDispatchToProps = (dispatch) =>{
   return{
       increment: (value)=> dispatch(increment(value)),
       decrement: (value)=> dispatch(decrement(value))
   }
}


export default connect(mapStatetoProps, mapDispatchToProps)(Counter)