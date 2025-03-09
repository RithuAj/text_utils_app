import React,{useState} from 'react'

export default function TextForm(props) {
   
 const[text,setText]=useState("Enter text from here")

 const handleUpButton=()=>{
    // console.log("Upper case button clicked");
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("Text converted to upper case","success");
 }
 const handleLowButton=()=>{
    // console.log("Upper case button clicked");
    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert("Text converted to lower case","success");
 }

 const handleClearText=()=>{
   let newText=text.toLowerCase();
    setText("");
    props.showAlert("Text cleared","success");

 }



 const handleOnChange=(event)=>{
    // console.log("text changed");
    setText(event.target.value);
    
 }
  return (
    <>
    <h1 style={{color:props.mode==='dark'?'white':'black'}}>{props.defaultContent}</h1>
    <div className="form-floating">
        
        <textarea className="form-control" placeholder="Leave a comment here" style={{height: 300+'px',color:props.mode==='dark'?'white':'black',backgroundColor:props.mode==='dark'?'grey':'white'}} id="floatingTextarea" value={text} onChange={handleOnChange}></textarea>
        <label htmlFor="floatingTextarea">Comments</label>
        <button className="btn btn-success my-3 mx-1" onClick={handleUpButton}  style={{color:props.mode==='dark'?'white':'black'}}>Change to UpperCase</button>
        <button className="btn btn-success my-3 mx-1" onClick={handleLowButton} style={{color:props.mode==='dark'?'white':'black'}}>Change to LowerCase</button>
        <button className="btn btn-success my-3 mx-1" onClick={handleClearText} style={{color:props.mode==='dark'?'white':'black'}}>Clear Text</button>

    </div>
    <h2 style={{color:props.mode==='dark'?'white':'black'}}>Text Summary</h2>
    <p style={{color:props.mode==='dark'?'white':'black'}}>{text.split(" ").length} words and {text.length} characters</p>
    <p style={{color:props.mode==='dark'?'white':'black'}}>{parseFloat(0.008*text.split(" ").length,2).toFixed(2)} Minutes read</p>
    </>
  )

  
}
