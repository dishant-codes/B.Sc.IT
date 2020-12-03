import React, { useState } from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {FaRegCopy } from "react-icons/fa";
import dark  from 'react-syntax-highlighter/src/styles/hljs/a11y-dark';
import {NavLink} from "react-router-dom";
import "../sidebar.css"

const Drag = () => {  
    const [isCopied, setIsCopied] = useState(false);
    const Ex2 = `<img draggable="true" alt="drag" />`;
    const Ex3 = `function drag(ev) {
        ev.dataTransfer.setData("text", ev.target.id);
      } `;
    const Ex4 = `function drop(ev) {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text");
        ev.target.appendChild(document.getElementById(data));
      }`; 
    const ExDrag = `<!DOCTYPE html>
<html>
     <head>
         <style>
           img{
             cursor: pointer;
           }
           #div1,
           #div2 {
             float: left;
             width: 100px;
             height: 35px;
             margin: 10px;
             padding: 10px;
             border: 1px solid black;
             background-color: white;
           }
         </style>
         <link rel="stylesheet" href="style2.css" />
     </head>
    <body>
         <p>Drag the image back and forth between the two div elements.</p>
     
         <div id="div1" ondrop="drop(event)" ondragover="allowDrop(event)">
           <img
             src="index.png"
             draggable="true"
             ondragstart="drag(event)"
             id="drag1"
             width="88"
             height="31"
           />
         </div>
     
         <div id="div2" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
     </body>
       <script>
         function allowDrop(ev) {
           ev.preventDefault();
         }
     
         function drag(ev) {
           ev.dataTransfer.setData("text", ev.target.id);
         }
     
         function drop(ev) {
           ev.preventDefault();
           var data = ev.dataTransfer.getData("text");
           ev.target.appendChild(document.getElementById(data));
         }
        </script>
</html>
         `;
 return ( 
    <> 
    <div className="container py-3" style={{backgroundColor:"white"}}>
    <h1 className="Sub-title text-center">IT-Tools and Web Designing</h1>
     <hr/>
      <div id="wrapper">
        <div id="sidebar-wrapper" style={{height:"25%"}}>
          <ul class="sidebar-nav">
          <h2 className="topic-title">Topics</h2> 
            <li><NavLink to="/B.Sc.IT/it-tools" className="topic-link">HTML5 Tags</NavLink></li> 
            <li><NavLink to="/B.Sc.IT/it-tools/drag" className="topic-link topic-active">Drag & Drop</NavLink></li>
          </ul>
        </div>
        <div id="page-content-wrapper">
          <div class="page-content">
            <div class="container">
              <div class="row">
                <div class="col-md-12">
                   <h1 className="tag-heading">HTML Drag and Drop API</h1>
                   <p className="tag-usage">In HTML, any element can be dragged and dropped.</p>
                  <iframe title="Drag&Drop" className="output-box" src="http://localhost:3000/B.Sc.IT/outputfiles/Drag&Drop/e1.html" frameborder="1" width="100%" height="195px"></iframe>
             <h2><b>Drag and Drop</b></h2>
                    <p className="tag-usage">Drag and drop is a very common feature. It is when you "grab" an object and drag it to a different location.</p><hr/>
            
             <h2><b>HTML Drag and Drop Example</b></h2>
                <p className="tag-usage">The example below is a simple drag and drop example:</p>
                   <div className="html-code-div">
                    <CopyToClipboard className="copyButton" 
                        onCopy={() => setIsCopied(true)}
                        text={ExDrag}>
                        <button>{isCopied ? 'Copied!' : <FaRegCopy/> }</button> 
                    </CopyToClipboard>
                    <SyntaxHighlighter className="code-box" language="html" style={dark}>
                     {ExDrag}
                    </SyntaxHighlighter>
                    </div>
                    <h2><b>Output of above program</b></h2>
                    <iframe title="DragAndDrop" className="output-box" src="http://localhost:3000/B.Sc.IT/outputfiles/Drag&Drop/e2.html" frameborder="1" width="100%" height="250px"></iframe>
                        <hr/>
                        <p className="tag-usage">It might seem complicated, but lets go through all the different parts of a drag and drop event.</p>
                        <hr/>
                        <h2><b>Make an Element Draggable</b></h2>
                        <p className="tag-usage">First of all: To make an element draggable, set the <code>&lt;draggable&gt;</code> attribute to true:</p>
                        <div className="html-code-div">
                        <CopyToClipboard className="copyButton" 
                            onCopy={() => setIsCopied(true)}
                            text={Ex2}>
                            <button>{isCopied ? 'Copied!' : <FaRegCopy/> }</button> 
                        </CopyToClipboard>
                        <SyntaxHighlighter className="code-box" language="html" style={dark}>
                            {Ex2}
                        </SyntaxHighlighter>
                        </div>
                        <hr/>
                            <h2><b>What to Drag - ondragstart and setData()</b></h2>
                            <p className="tag-usage">Then, specify what should happen when the element is dragged.<br/>

                            In the example above, the <code>ondragstart</code> attribute calls a function, drag(event), that specifies what data to be dragged.<br/>
                            
                            The <code>dataTransfer.setData()</code> method sets the data type and the value of the dragged data:</p>
                            <div className="html-code-div">
                                <CopyToClipboard className="copyButton" 
                                    onCopy={() => setIsCopied(true)}
                                    text={Ex3}>
                                    <button>{isCopied ? 'Copied!' : <FaRegCopy/> }</button> 
                                </CopyToClipboard>
                                <SyntaxHighlighter className="code-box" language="javascript" style={dark}>
                                    {Ex3}
                                </SyntaxHighlighter>
                           </div>
                           <p className="tag-usage">In this case, the data type is "text" and the value is the id of the draggable element ("drag1").</p>
                            <hr/>
                            <h2><b>Where to Drop - ondragover</b></h2>
                            <p className="tag-usage">The <code>ondragover</code> event specifies where the dragged data can be dropped.

                            By default, data/elements cannot be dropped in other elements. To allow a drop, we must prevent the default handling of the element.
                            
                            This is done by calling the <code>event.preventDefault()</code> method for the ondragover event:</p>
                            <div className="html-code-div">
                                <CopyToClipboard className="copyButton" 
                                    onCopy={() => setIsCopied(true)}
                                    text="event.preventDefault()">
                                    <button>{isCopied ? 'Copied!' : <FaRegCopy/> }</button> 
                                </CopyToClipboard>
                                <SyntaxHighlighter className="code-box" language="javascript" style={dark}>
                                event.preventDefault()
                                </SyntaxHighlighter>
                           </div>
                           <hr/>
                            <h2><b>Do the Drop - ondrop</b></h2>
                            <p className="tag-usage">When the dragged data is dropped, a drop event occurs.

                            In the example above, the ondrop attribute calls a function, drop(event):</p>
                            <div className="html-code-div">
                                <CopyToClipboard className="copyButton" 
                                    onCopy={() => setIsCopied(true)}
                                    text={Ex4}>
                                    <button>{isCopied ? 'Copied!' : <FaRegCopy/> }</button> 
                                </CopyToClipboard>
                                <SyntaxHighlighter className="code-box" language="javascript" style={dark}>
                                         {Ex4}
                                </SyntaxHighlighter>
                           </div>
                           <p className="tag-usage"><b>Code explained:</b>
                                <ul>
                                <li>Call preventDefault() to prevent the browser default handling of the data (default is open as link on drop).</li>
                                <li>Get the dragged data with the dataTransfer.getData() method. This method will return any data that was set to the same type in the setData() method.</li>
                                <li>The dragged data is the id of the dragged element ("drag1").</li>
                                <li>Append the dragged element into the drop element.</li>
                                </ul>
                                </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div className="container">

      </div>
 </>
  );
};

export default Drag;