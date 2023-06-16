import React, { useState } from 'react'
import {Badge, Form } from 'react-bootstrap'
import BtnManager from './BtnManager';
import TextCard from './TextCard';
import Navigation from './Navigation';


const TextForm = (props) => {
    const [text, setText] = useState('');
    const [mode, setMode] = useState('light');

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
const textWrap =()=>{
  const newtext = text.replace(/ /g, '');
  setText(newtext);
}
const copyText =()=>{
  console.log('object')
  let textCopy = document.getElementById('textForm');
  textCopy.select()
  navigator.clipboard.writeText(textCopy.value);
}
const spaceRem =()=>{
  let compactText = text.split(/[ ]+/);
  setText(compactText.join(" "));
}
const caseChange =(event)=>{
    // console.log('case change switch is working');
    setText(event.target.value);
}

const toggleMode = ()=>{
  if (mode === 'light'){
    setMode('dark');
  } else {
    setMode('light');
  }
}



  return (
    <>
    <Navigation
    title= 'TextUtils TextForm'
    mode={mode}
    toggleMode={toggleMode}
    />
    <div className='container my-4'>
        <h3>
        <Badge bg="info">Text to analyze</Badge>
      </h3>
       <Form>
      <Form.Group className="mb-4" controlId="exampleForm.ControlTextarea1">
        <Form.Control as="textarea" value={text} onChange={caseChange}  rows={8} />
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
    variant="outline-danger"
    BtnName="Text wrapper"
    btnClick={textWrap}
    />
    {' '}
    <BtnManager
    variant="outline-dark"
    BtnName="copyText"
    btnClick={copyText}
    />
    {' '}
    <BtnManager
    variant="outline-warning"
    BtnName="Space remove"
    btnClick={spaceRem}
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
