import React, { useEffect } from 'react';
import '../styles/Count.css';

const Count = ({count, updateCount}) => {
  useEffect(() => {
    console.log('Componente Count Renderizado');
  }, [count])
  
  return (
    <div className="count-container">
      <strong>Count: </strong>{count}
      <button onClick={() => updateCount(count + 1)}>+</button>
      <button onClick={() => updateCount(count - 1)}>-</button>
    </div>
  )
}

export default Count;