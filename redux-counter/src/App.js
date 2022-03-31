import React, {Component} from "react"
import { createStore } from "redux"
import Counter from "./counter"
import counterReducer from "./reducer"
import {Provider} from 'react-redux'
import DisplayCounter from './DisplayCounter'

let store = createStore(counterReducer)

class App extends Component {
  render() { 
    return(
      <Provider store={store} >
    <div className="App">
      <h1>Learning about redux!!</h1>
      <Counter/>
      <DisplayCounter/>
    </div>
      </Provider>
    )
}
}

export default App;
