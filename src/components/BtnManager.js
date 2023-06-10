import React from 'react'
import { Button } from 'react-bootstrap'

const BtnManager = ({BtnName,variant,btnClick}) => {
  return (
    
      <Button variant={variant} onClick={btnClick}>{BtnName}</Button>
    
  )
}

export default BtnManager
