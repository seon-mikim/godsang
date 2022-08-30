import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'
const AddBtnArea = () => {
const navigate = useNavigate()
    return (
    
    <StbtnArea>
       
       <Stbtn onClick={()=>{navigate('/form');}}>갓생추가</Stbtn>
    </StbtnArea>
  )
}

export default AddBtnArea


const StbtnArea = styled.div`
    display: flex;

    align-items: center;
    justify-content: center;
    
    
    
`
const Stbtn = styled.button`
    
   
  
    background-color: black;
    color: #fff;
    border-radius: 30px;
    width:180px;
    height:50px;
    font-size: 16px;
    margin-left: 20px;
    margin-bottom: 50px;
`