import React, { useState } from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {FaRegCopy, FaRegClipboard} from "react-icons/fa";
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
      <div className="container mt-4">
       <h1>Hello World using C++</h1>
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