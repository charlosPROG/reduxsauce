import React, { useState, useEffect } from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'
import Lista from './components/Lista'
import Todo from './components/Todo'

function App() {
   return (
      <Provider store={ store }>
         <Todo />
      </Provider>
   )
}

export default App;