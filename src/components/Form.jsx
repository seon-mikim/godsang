import React,{useState} from 'react'

import Layout from './Layout'
import Header from './Header/Header'
import styled from 'styled-components'


const Form = () => {
   
    const [todo, setTodo] =useState({
        id:0,
        title: "",
        content: "",
        username: "",
    })
    const onChangeHandler = (event) => {
        const {name, value} = event.target;
        setTodo({
            ...todo,[name]:value,
        })

        console.log(setTodo)

       
    }
  return (

    <div>
         <Header/>
         <Layout>
   
    <div>:갓생 추가하기</div>
    <div>
        
        <StForm  onSubmit={(event) => {
          event.preventDefault();
          if (todo.content.trim() === "" ||
            todo.username.trim() === "" ||
            todo.title.trim() === "") {
            return alert("모든 항목을 입력해주세요.");
           
          }
          setTodo({ title: "", content: "", username: "" });
          }}>
            <StLabel maxLength={5}>작성자</StLabel>
            <StInput type="text" name='username'value={todo.username}  onChange={onChangeHandler}/>
            <StLabel >제목</StLabel>
            <StInput type="text" name ='title' value={todo.title}  onChange={onChangeHandler}/>
            <StLabel>내용</StLabel>
            <StTextArea name="content"  value={todo.content} cols="30" rows="10"  onChange={onChangeHandler}></StTextArea>
            <StBtnArea>
            <StBtn>추가하기</StBtn>
            </StBtnArea>
            
        </StForm>
    </div>
    </Layout>
    </div>
    
  )
}

export default Form





const StForm = styled.form`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding: 20px;
`

const StLabel = styled.label`
    margin: 20px 0 10px 0;
`

const StInput = styled.input`
    height: 30px;
    border: 1px solid #adadad;
    border-radius: 8px;
`

const StTextArea = styled.textarea`
     border: 1px solid #adadad;
    border-radius: 8px;
`
const StBtnArea = styled.div`
    width: 300px;
    padding: 20px 450px;
`

const StBtn = styled.button `
    margin-top: 20px;
    width: 300px;
    height: 50px;
    border-radius: 50px;
    border: none;
    background-color: black;
    color: white;
    

`