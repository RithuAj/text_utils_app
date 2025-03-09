import React,{useState} from 'react'

export default function TextForm(props) {
 const[text,setText]=useState("Enter text from here")

 const handleUpButton=()=>{
    // console.log("Upper case button clicked");
    let newText=text.toUpperCase();
    setText(newText);
 }
 const handleLowButton=()=>{
    // console.log("Upper case button clicked");
    let newText=text.toLowerCase();
    setText(newText);
 }



 const handleOnChange=(event)=>{
    // console.log("text changed");
    setText(event.target.value);

 }
  return (
    <>
    <h1>{props.defaultContent}</h1>
    <div className="form-floating">
        
        <textarea className="form-control" placeholder="Leave a comment here" style={{height: 300+'px'}} id="floatingTextarea" value={text} onChange={handleOnChange}></textarea>
        <label htmlFor="floatingTextarea">Comments</label>
        <button className="btn btn-success my-3 mx-1" onClick={handleUpButton}>Change to UpperCase</button>
        <button className="btn btn-success my-3 mx-1" onClick={handleLowButton}>Change to LowerCase</button>

    </div>
    <h2>Text Summary</h2>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <p>{parseFloat(0.008*text.split(" ").length,2).toFixed(2)} Minutes read</p>
    </>
  )

  
}
