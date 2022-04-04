import React, {Component} from "react"
import {createStore } from "redux"
import Counter from "./counter"
import counterReducer from "./reducer"
import {Provider} from 'react-redux'
import DisplayCounter from './DisplayCounter'


let store = createStore(
  counterReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

)



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
