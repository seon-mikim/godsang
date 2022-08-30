import React from 'react'
import styled from 'styled-components'
import{useNavigate} from 'react-router-dom'

const Header = () => {
    const navigate = useNavigate()
  return (
    <div>
        <StHeader>
    
       <StImg src="../../pngwing.png" onClick={()=>{navigate('/')}} alt="홈으로 돌아가기" />
    
     
     <StH1>갓생살기 프로젝트</StH1>
     
    
     
  </StHeader>
    </div>
    
  )
}

export default Header


const StHeader = styled.header`
  display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 40px auto;
   



`
const StImg = styled.img`
    
    width: 25px;
    height: 25px;
    

`

const StH1 = styled.h1`
  
    text-align: center;
 
    justify-content: center;
    align-content: center;
    margin: 0 auto;
    font-size: 25px;
`
