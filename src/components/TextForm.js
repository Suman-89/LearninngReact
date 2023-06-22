import React, { useState } from 'react'
import {Alert, Badge, Form } from 'react-bootstrap'
import BtnManager from './BtnManager';
import TextCard from './TextCard';
import Navigation from './Navigation';


const TextForm = (props) => {
    const [text, setText] = useState('Enter text...');
    const [mode, setMode] = useState('light');
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');

const upClick =()=>{
    // console.log('upClick started' + text);
    // console.log('upClick');
    let textUpCase = text.toUpperCase();
    setText(textUpCase);
    setShowAlert(true);
    setAlertMessage('Text case change successfull *');
    setTimeout(()=>{
      setShowAlert(false);
      setAlertMessage('');
    },2000);
}
const lowClick =()=>{
    // console.log('lowclick');
    let textLowCase = text.toLowerCase();
    setText(textLowCase);
    setShowAlert(true);
    setAlertMessage('Text case change successfull *');
    setTimeout(()=>{
      setShowAlert(false);
      setAlertMessage('');
    },2000);
}
const clearButton =()=>{
  // console.log('clear pressed');
  setText('Enter text...');
  setShowAlert(true);
    setAlertMessage('Text cleared *');
    setTimeout(()=>{
      setShowAlert(false);
      setAlertMessage('');
    },2000);
}
const textWrap =()=>{
  const newtext = text.replace(/ /g, '');
  setText(newtext);
  setShowAlert(true);
    setAlertMessage('Text wrapping successfull *');
    setTimeout(()=>{
      setShowAlert(false);
      setAlertMessage('');
    },2000);
}
const copyText =(e)=>{
  console.log('e-->',e);
  // let textCopy = document.getElementById('textForm');
  // textCopy.select()
  // navigator.clipboard.writeText(textCopy.value);
}
const spaceRem =()=>{
  let compactText = text.split(/[ ]+/);
    setText(compactText.join(" "));
    setShowAlert(true);
    setAlertMessage('Extra spaces removed ! *');
    setTimeout(()=>{
      setShowAlert(false);
      setAlertMessage('');
    },2000);
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
    setMode={setMode}
    toggleMode={toggleMode}
    />
    <div className="container my-2">
      <div className="col-sm-3">
      {
        text && showAlert === true ? (<Alert variant="warning">
        {alertMessage}
      </Alert> ):(<></>)
      }
      </div>
     
    
    </div>
    <div className='container my-4'>
        <h3>
        <Badge bg={mode === 'light' ? ("info"):("dark")}>Text to analyze</Badge>
      </h3>
       <Form>
      <Form.Group className="mb-4" controlId="exampleForm.ControlTextarea1">
        <Form.Control as="textarea" value={text} onChange={caseChange}  rows={8} />
      </Form.Group>
     </Form>
     <BtnManager
     variant={mode === 'light' ? ("primary"):("outline-dark")}
     BtnName="Conver to UpperCase"
     btnClick={upClick}
     />{' '}
     <BtnManager
     variant={mode === 'light' ? ("success"):("outline-dark")}
     BtnName="Conver to LowerCase"
     btnClick={lowClick}
     />
     {' '}
   
     <BtnManager
     variant={mode === 'light' ? ("danger"):("outline-dark")}
     BtnName="Text wrapper"
     btnClick={textWrap}
     />
     {' '}
     <BtnManager
     variant={mode === 'light' ? ("warning"):("outline-dark")}
     BtnName="copyText"
     btnClick={copyText}
     />
     {' '}
     <BtnManager
     variant={mode === 'light' ? ("secondary"):("outline-dark")}
     BtnName="Space remove"
     btnClick={spaceRem}
     />
     {' '}
     <BtnManager
     variant={mode === 'light' ? ("info"):("outline-dark")}
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
      className="text-light"
      />
    </div>
    </>
  )
}

export default TextForm
