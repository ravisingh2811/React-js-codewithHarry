import React,  {useState} from 'react'

export default function TextForm(prop) {
  const handelUpCheck = () =>{
    let newText = text.toUpperCase();
    setText(newText);
  }
  const handelOnChange = (event) => {
    setText(event.target.value)
  }
  const handelLoCheck = () =>{
    let newText = text.toLowerCase();
    setText(newText);
  }



  const [text , setText] = useState('Enter text here');

  return (
      <>
      <div className="my-3">
         <h1>{prop.heading}</h1>
         <div className="mb-2">
         <textarea className="form-control my-3" value={text} onChange = {handelOnChange} id="myBox" rows="3"></textarea>
         </div>
              
              <button className="btn btn-primary mx-2" onClick={handelUpCheck}>Conert uppercase</button>
              <button className="btn btn-primary mx-2" onClick={handelLoCheck}>Conert Lowercase</button>
      </div>
        <div className="container my-3">
          <h2>Your Text Summary</h2>
          <p>{text.split(" ").length} words and {text.length} charcater</p>
          <h3>Preview</h3>
          <p>{text}</p>
        </div>
          
      </>    
  )
}
