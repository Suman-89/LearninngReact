import React from 'react'
import { Accordion} from 'react-bootstrap'
import Navigation from './Navigation'
import BtnManager from './BtnManager';

const AboutPage = ({darkMode,setDarkMode,button,setButton,btnVariant,setBtnVariant}) => {
  
  const modeChange=(e)=>{
    // console.log('modeChange-->',e);
    if (darkMode.color === 'black') {
      setDarkMode({
        color: 'white',backgroundColor:'black'
      });
      setButton('Switch to Light Mode')
      setBtnVariant("outline-info");
    }else{
      setDarkMode({
        color: 'black',backgroundColor:'white'
      });
      setButton('Switch to Dark Mode');
      setBtnVariant("outline-dark");
    }
  }

  return (
    <>
    <Navigation  title= 'TextUtils About'/>
    <div className="container my-4" >
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0" >
        <Accordion.Header >Accordion Item #1</Accordion.Header>
        <Accordion.Body style={darkMode}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header >Accordion Item #2</Accordion.Header>
        <Accordion.Body style={darkMode}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
    <div className="container my-4">
      <BtnManager
      BtnName={button}
      variant={btnVariant}
      btnClick={modeChange}
      />
    {/* <button type="button" onClick={modeChange} className={btnclassName}>{button}</button> */}
    </div>
    
    </>
  )
}

export default AboutPage
