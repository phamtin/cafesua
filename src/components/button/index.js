import React from "react"
import styled from "styled-components"

const Button = styled.button`
  padding: 6px 30px;
  color: white;
  background-color:#e83493;
  border:0
`

const index = (props) => {
  return (
    <Button> {props.children}</Button>
    
  )
}

export default index
