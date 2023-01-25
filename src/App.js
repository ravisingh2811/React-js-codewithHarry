
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {
  return (
  <>
   <Navbar tittle = "Mere nav"/>
   <div className="container my-3">
        <TextForm heading = "Enter you text below"/>
   </div>
  
</>
  );
}

export default App;
