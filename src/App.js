import './App.css';
import Navigation from './components/Navigation';
import TextForm from './components/TextForm';
// import Navbar from './components/Navbar';



function App() {
  return (
   <>
    <Navigation title= 'TextUtils' />
    <div className="container my-4">
    <TextForm heading="Enter Text to Analyze" />
    </div>
   </>
  );
}

export default App;
