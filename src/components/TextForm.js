import React,{useState} from 'react'//use stat is a hook

export default function TextForm(props) {
    const handleUpclick = () =>{
        console.log("uppercase was clicked ")
        let newtext = text.toUpperCase();
        setText(newtext)
        props.showalert("converted to upper case !!","Success");
        
    }
    const handlelowclick = () =>{
        console.log("lower case was clicked ")
        let newtext = text.toLowerCase();
        setText(newtext)
        props.showalert("converted to lower case !!","Success");
    }
    const handleclearclick = () =>{
        console.log("clear was clicked ")
        let newtext = " "
        setText(newtext)
    }
    const handlecopyclick = () =>{
        console.log("copy was clicked ")
        var text = document.getElementById('mybox')
        text.select();
        navigator.clipboard.writeText(text.value)
        props.showalert("copied to clipboard","Success");
        
    }
    const handleextraspaces = () =>{
       let newtext = text.split(/[" "]+/)
       setText(newtext.join(' '))

        
    }
    const handleChange = (event) =>{
        console.log("onchange")
        setText(event.target.value)
    }
    const [text,setText] = useState('enter text here');
    // settext("abcd")
    // text = "abcd0" wrong to change the state
    // setText("abcd");
  return (
    <>
    <div className="container" style = {{color: props.mode === 'dark'?'white':'black'}}>
      <h1>{props.heading}</h1>
      <textarea className="form-control" value = {text} style = {{backgroundColor: props.mode === 'dark'?'#061f4f':'white',color: props.mode === 'dark'?'white':'grey'}} onChange = {handleChange} id="mybox" rows="8"></textarea>
      <button disabled = {text.length === 0}className="btn btn-primary my-1 mx-2" onClick = {handleUpclick}>Convert to upper case</button>
      <button disabled = {text.length === 0} className="btn btn-primary my-1 mx-2" onClick = {handlelowclick}>Convert to lower case</button>
      <button disabled = {text.length === 0} className="btn btn-primary my-1 mx-2" onClick = {handleclearclick}>clear text</button>
      <button disabled = {text.length === 0} className="btn btn-primary my-1 mx-2" onClick = {handlecopyclick}>copy text</button>
      <button disabled = {text.length === 0} className="btn btn-primary my-1 mx-2" onClick = {handleextraspaces}>Remove extra spaces</button>
      </div>
      <div className="container my-3" style = {{color: props.mode === 'dark'?'white':'black'}}>
        <h2>your text summary is </h2>
        <p> {text.split(" ").filter((element) =>{return element.length!==0}).length} word and {text.length} characters</p>
        <p> {0.008*text.split(" ").filter((element) =>{return element.length!==0}).length} Minute read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"enter something to preview it here"}</p>
      </div>
    </>
      

    
  )
}
