import React, { useState } from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {FaRegCopy} from "react-icons/fa";
import dark  from 'react-syntax-highlighter/src/styles/hljs/a11y-dark';


const Codehighlight = () => {
  const codeString = `#include <iostream>
  using namespace std;
  
  // main() is where program execution begins.
  int main() {
     cout << "Hello World"; // prints Hello World
     return 0;
  }`;
  
    const [isCopied, setIsCopied] = useState(false);
    return (
      <div className="cpp-container container">
        <h1 className="Sub-title">C++ Programming</h1>
       <h1 className="py-2"><b>Hello World using C++</b></h1>
        <div className="code-div">
          <CopyToClipboard className="copyButton" 
              onCopy={() => setIsCopied(true)}
              text={codeString}>
              {/* <button>{isCopied ? <FaRegClipboard/> : <FaRegCopy/> }</button> */}
              <button>{isCopied ? 'Copied!' : <FaRegCopy/> }</button> 
          </CopyToClipboard>

          <SyntaxHighlighter className="code-box" language="cpp" style={dark}>
            {codeString} 
          </SyntaxHighlighter>
          
      </div>
    </div>
  );
};

export default Codehighlight;