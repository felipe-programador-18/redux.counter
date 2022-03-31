import React from 'react'
import {connect} from 'react-redux'
const DisplayCounter = ({count}) =>{
  return <p>O Contador esta em : {count} </p>
}

const mapStatetoProps = (state) => {
   return {
       count: state.count
   }
}


export default connect(mapStatetoProps)(DisplayCounter)