import React,{useState} from 'react'


export default function Textform(props) {
    const handleUpClick=()=>{
       
        let newtext=text.toUpperCase();
        setText(newtext);
    };
    const handleLowClick=()=>{
        
        let newtext=text.toLowerCase();
        setText(newtext);
    };
    const handleClearClick=()=>{
        
        let newtext='';
        setText(newtext);
    };
    const handleCopyClick=()=>{
      let newtext=document.getElementById('mybox');
      newtext.select();
      
      navigator.clipboard.writeText(newtext.value);

  };
  const handleExtraSpaceRemoveClick=()=>{
        
    let newtext=text.split(/[ ]+/);
    setText(newtext.join(' '));
    
};
    const handleOnChange=(event)=>{
        console.log("click me change");
        setText(event.target.value);
            };
    const [text,setText]=useState("");
    // setText("Enter y6ohrgeg");rightwayto updatec text
  return (
    <>
  <div className="container">
<div className=" mb-3 m-3 w-75">
  <h4>{props.heading}</h4>
  <textarea placeholder="Enter Your's Text Here........." className="form-control" id="mybox" rows="10" onChange={handleOnChange} value={text}></textarea>
</div>
<button className="btn btn-primary mb-3 m-3" onClick={handleUpClick}>Conver to UpperCase </button>
<button className="btn btn-primary mb-3 m-3" onClick={handleLowClick}>Conver to LowerCase </button>
<button className="btn btn-primary mb-3 m-3" onClick={handleClearClick}>Clear Text </button>
<button className="btn btn-primary mb-3 m-3" onClick={handleCopyClick}>Copy Text </button>
<button className="btn btn-primary mb-3 m-3" onClick={handleExtraSpaceRemoveClick}>Remove Extra Spaces</button>
</div>
<div className="container">
    <h4>Your's Text Summary...</h4>
    <p>Number of Words:<b>{text.split(" ").length}</b> And Number of Character <b> {text.length}</b> words</p>
    <p>Time To Taking Reading Wors:<b>{0.008* text.split(" ").length}</b></p>
    <h5>Preview</h5>
    <p>{text}</p>
</div>
    </>
  )
}
