import React, { useState } from 'react'
import {Badge, Form } from 'react-bootstrap'
import BtnManager from './BtnManager';
import TextCard from './TextCard';


const TextForm = (props) => {
    const [text, setText] = useState('');

const upClick =()=>{
    // console.log('upClick started' + text);
    // console.log('upClick');
    let textUpCase = text.toUpperCase();
    setText(textUpCase);
}
const lowClick =()=>{
    // console.log('lowclick');
    let textLowCase = text.toLowerCase();
    setText(textLowCase);
}
const clearButton =()=>{
  // console.log('clear pressed');
  setText('');
}
const caseChange =(event)=>{
    // console.log('case change switch is working');
    setText(event.target.value);
}
  return (
    <>
    <div>
        <h3>
        <Badge bg="secondary">{props.heading}</Badge>
      </h3>
       <Form>
      <Form.Group className="mb-4" controlId="exampleForm.ControlTextarea1">
        <Form.Control as="textarea" value={text} onChange={caseChange} rows={8} />
      </Form.Group>
    </Form>
    <BtnManager
    variant="outline-primary"
    BtnName="Conver to UpperCase"
    btnClick={upClick}
    />{' '}
     <BtnManager
    variant="outline-success"
    BtnName="Conver to LowerCase"
    btnClick={lowClick}
    />
    {' '}
    <BtnManager
    variant="outline-secondary"
    BtnName="Clear text bar"
    btnClick={clearButton}
    />
    {' '}
    </div>
    <div className="container">
      <TextCard
      text={text}
      textHead="Text Summary"
      previewHeader="Text preview"
      />
    </div>
    </>
  )
}

export default TextForm
