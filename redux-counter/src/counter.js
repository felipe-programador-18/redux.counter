
import React, {Component} from "react"
import { connect } from "react-redux"
import { decrement, increment } from "./actions"

class Counter extends Component{
  render(){
  return( <>
        <p>Contador {this.state.count}
         <button onClick={this.props.increment} >+</button> 
         <button onClick={this.props.decrement} >-</button> 
        </p>    
    </>
    )}
}

// now i am mapnig state !!
const mapStatetoProps = (state) =>{
  return {
      count: state.count
  }
}

const mapDispatchtoProps = (dispatch) =>{
   return{
       increment: ()=> dispatch(increment),
       decrement: ()=> dispatch(decrement)
   }
}


export default connect(mapStatetoProps, mapDispatchtoProps)(Counter)