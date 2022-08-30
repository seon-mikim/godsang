import React from 'react'
import styled from 'styled-components'
const Layout = ({children}) => {
  return (
    <StLayout>{children}</StLayout>
  )
}

const StLayout = styled.div`
    display: flex;
  
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
`

export default Layout