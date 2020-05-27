import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'

export default function Lista() {
   const lista = useSelector(state => state.lista)
   const [valor, setVal] = useState('')
   const dispatch = useDispatch()

   const addList = () => {
      dispatch({ type: 'ADD_LIST', title: valor })
      setVal('')
   }

   return (
      <div>
         <input type="text" value={ valor } onChange={e => setVal(e.target.value)} />
         <ul>
            { lista.map((list, i) => <li key={ i }>{ list }</li>) }
         </ul>
         <button onClick={addList}>Adicionar</button>
      </div>
   );
}
