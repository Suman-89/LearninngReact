import React, { useState } from 'react'
import { Badge, Form } from 'react-bootstrap'
import { Button } from 'react-bootstrap';


const TextForm = (props) => {
    const [text, setText] = useState('');

const upClick =()=>{
    // console.log('upClick started' + text);
    console.log('upClick');
    let textUpCase = text.toUpperCase();
    setText(textUpCase);
}
const lowClick =()=>{
    console.log('lowclick');
    let textLowCase = text.toLowerCase();
    setText(textLowCase);
}
const caseChange =(event)=>{
    console.log('case change switch is working');
    setText(event.target.value);
}
  return (
    <div>
        <h3>
        <Badge bg="secondary">{props.heading}</Badge>
      </h3>
       <Form>
      <Form.Group className="mb-4" controlId="exampleForm.ControlTextarea1">
        <Form.Control as="textarea" value={text} onChange={caseChange} rows={8} />
      </Form.Group>
    </Form>
    <Button variant="outline-primary" onClick={upClick}>Convert to UpperCase</Button>{' '}
    <Button variant="outline-secondary" onClick={lowClick}>Conver to LowerCase</Button>{' '}
    </div>
  )
}

export default TextForm
