import React, { useState } from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {FaRegCopy } from "react-icons/fa";
import dark  from 'react-syntax-highlighter/src/styles/hljs/a11y-dark';
// import OutputDB from "./Output";
// import html from "./html";
const Html = (props) => {
    const [isCopied, setIsCopied] = useState(false);
    return (
    <> 
      <div className="container my-0">
    <h1>{props.heading}</h1>
         <h2>Definition and Usage</h2>
           {props.use}
        <div className="html-code-div">
          <CopyToClipboard className="copyButton" 
              onCopy={() => setIsCopied(true)}
              text={props.htmlcode}>
              {/* <button>{isCopied ? <FaRegClipboard/> : <FaRegCopy/> }</button> */}
              <button>{isCopied ? 'Copied!' : <FaRegCopy/> }</button> 
          </CopyToClipboard>

          <SyntaxHighlighter className="code-box" language="html" style={dark}>
            {props.htmlcode} 
          </SyntaxHighlighter>
          
      </div>
    </div>
    <div className="container mt-3">
    <h1>Output:</h1>
    <iframe className={props.classname} title="feildset" src={props.display} width="100%" height="200px"></iframe>
   </div><br/><br/>
 </>
  );
};

export default Html;