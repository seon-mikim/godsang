import React from 'react'
import styled from 'styled-components'


const Todo = ({todo}) => {
  
  return (
    <StCard key={todo.id}>
        <div >
            <h3>{todo.title}</h3>
        </div>
       <div>
            <p>{todo.username}</p>
       </div>
        
    </StCard>
  )
}

export default Todo

const StCard =styled.div`
  border: 1px solid #ddd;
  border-radius: 12px;
  height: 90px;
  width: 1200px;
  min-width: 800px;
  padding: 20px;

`