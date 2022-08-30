import React from 'react'
import Todo from './Todo'
import {useSelector } from "react-redux";
import styled from 'styled-components';


const TodoList = () => {

 
  const {todos} = useSelector((state) => state.todos);
  return (
    <div>
        {todos.length!==0?todos.map((todo)=>(<Todo key={todo.id} todo={todo}/>)):<StDiv>할일이 없어요. 추가하러 갈까요?</StDiv>}
    </div>
  )
}

export default TodoList

const StDiv = styled.div`
  margin-left: 20px;
`
