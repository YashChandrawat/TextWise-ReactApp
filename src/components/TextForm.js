import React, { useState } from 'react'

export default function TextForm(props) {

    const handleUpClick = () => {
        // console.log("On click Encountered ");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted To UpperCase !", "success")
    }
    const handleLoClick = () => {
        // console.log("On click Encountered ");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted To LowerCase !", "success")

    }

    const handleToClear = () => {
        // console.log("On click Encountered ");
        let newText = '';
        setText(newText);
        props.showAlert("Text has been cleared !", "success")

    }

    const handleOnChange = (event) => {
        // console.log("On Change Encountered ");
        setText(event.target.value)
    }

    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text is been copied to clipboard !", "success")

    }
    const [text, setText] = useState("");

    let num = text.replace(/ /g, "");

    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2 >{props.heading}</h2>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? '#22303C' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="myBox" rows="8"
                    ></textarea>
                </div>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to UpperCase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Convert to LowerCase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleToClear}>Clear Text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy Text</button>



            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>Yout Text Summary</h2>
                <p><b>Words</b> -
                    {text.split(" ").filter((element) => { return element.length !== 0 }).length}
                    <br />
                    <b>Character</b> - {num.length} <br />
                    <b>Maximum Time Required</b> to read {text.split(" ").length} is {0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} Minutes.
                </p>
                <h3>Preview of your text</h3>
                <p>{text.length > 0 ? text : "Nothing to preview !"}</p>


            </div>

        </>
    )
}
