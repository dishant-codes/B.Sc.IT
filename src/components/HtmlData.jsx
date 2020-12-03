const HtmlData = [

    {
       id: 1,
       codeString: `<!DOCTYPE html>
       <html> <head>
       <title>Document</title>
       </head>
       <body>
       <fieldset>
         <legend>Regitration Page</legend>
         <form>
           <input type="text" name="username" placeholder="Enter Username" /> <br/> <br/>
           <input
             type="text"
             name="userPass"
             placeholder="Enter Password"
           /><br /><br />
           <input type="submit" value="Regiter" />
         </form>
       </fieldset>
       </body>
       </html>`,
       title: `1.Fieldset Tag`,
       className:`output-box`,
       usage: <p>
       The <code>&lt;fieldset&gt;</code> tag is used to group related elements in a form.
       
       The <code>&lt;fieldset&gt;</code> tag draws a box around the related elements.
     </p>,
     output: `outputfiles/fieldset.html`,
    },
    {
      id: 2,
        codeString: `<!DOCTYPE html>
        <html> <head>
            <title>Document</title>
        </head>
        <body>
            <section>
                <h1>B.Sc. I.T.</h1>
                <p>This is SY Class. All students are attending this class. students will learn how to design and devolep web pages.</p>
            </section>
        </body>
        </html>`,
        title: `2.Section Tag`,
        className:`output-box`,
        usage: <p>The <code>&lt;section&gt;</code> tag defines a section in a document.</p>,
        output: `outputfiles/Section.html`,
     },
     {
      id: 3,
        codeString: `<!DOCTYPE html>
        <html> <head>
            <title>Document</title>
        </head>
        <body>
            <details>
                <summary>B.Sc. I.T.</summary>
                <p>Android</p>
                <p>IT Tools</p>
                <p>D.B.M.S.</p>
            </details>    
        </body>
        </html>`,
        title: `3.Details Tag`,
        className:`output-box`,
        usage:  <p>The <code>&lt;details&gt;</code> tag specifies additional details that the user can open and close on demand.

        The <code>&lt;details&gt;</code> tag is often used to create an interactive widget that the user can open and close. By default, the widget is closed. When open, it expands, and displays the content within.
        
        Any sort of content can be put inside the <code>&lt;details&gt;</code> tag. 
        
        Tip: The <code>&lt;summary&gt;</code> tag is used in conjuction with <code>&lt;details&gt;</code> to specify a visible heading for the details.</p>,
        output: `outputfiles/details.html`,
     },
     {
      id: 4,
      codeString: `<!DOCTYPE html>
      <html>
        <html> <head>
          <title>Document</title>
        </head>
        <body>
          <video height="100%" width="100%" controls>
            <source src="outputfiles/movie.mp4" type="video/mp4" />
          </video>
        </body>
      </html>
      `,
      title: `4.Video Tag`,
      className:`v`,
      usage:  <p>The <code>&lt;video&gt;</code> tag is used to embed video 
      content in a document, such as a movie clip or other video streams.<br/>The <code>&lt;video&gt;</code> tag contains one or more
      <code>&lt;source&gt;</code> tags 
      with different video sources. The browser will choose the first source it 
      supports.</p>,
      output: `outputfiles/video.html`,
   },
   {
    id: 5,
    codeString: `<!DOCTYPE html>
    <html>
        <html> <head>
            <title>Document</title>
        </head>
        <body>
            <center>
            <table border="5px solid balck" width=75% cellspacing="5px" cellpadding="20px">
                <caption>Monday Savings</caption>
                <tr">
                    <th>Month</th>
                    <th>Savings</th>
                </tr>
                <tr>
                    <td>January</td>
                    <td>100$</td>
                </tr>
            </table>
            </center>
        </body>
    </html>
    `,
    title: `5.Caption Tag`,
    className:`output-box`,
    usage:  <p>The <code>&lt;caption&gt;</code> tag defines a table caption.<br/>

    The <code>&lt;caption&gt;</code> tag must be inserted immediately after the <code>&lt;table&gt;</code> tag.<br/><br/>
    
    Tip: By default, a table caption will be center-aligned above a table. However,<br/>
     the CSS properties text-align and caption-side can be used to align and place the caption.</p>,
    output: `outputfiles/caption.html`,
 },
 {
  id: 6,
  codeString: `<!DOCTYPE html>
  <html> <head>
      <title>Document</title>
  </head>
  <body>
      <article>
          <h1 style="color: green;">Result Declaration.</h1>
          <p>Results will be declared by 30th Octomber.</p>
      </article>
  </body>
  </html>
  `,
  title: `6.Article Tag`,
  className:`output-box`,
  usage: <> <p>The <code>&lt;article&gt;</code> tag specifies independent, self-contained content.<br/>An article should make sense on its own and it should be possible to distribute it independently from the rest of the site.<br/><br/>
        
  Potential sources for the <code>&lt;article&gt;</code> element:<br/>
  <ul>
     <li>Forum post</li> 
     <li>Blog post</li>
     <li>News story</li>
  </ul>
</p><br/>
<p>  Note: <code>&lt;article&gt;</code> element does not render as anything special in a browser. However, you can use CSS to style the <code>&lt;article&gt;</code> element (see example below).
  </p></>,
  output: `outputfiles/article.html`,
},
  {
    id: 7,
    codeString: `<!DOCTYPE html>
    <html> <head>
        <title>Document</title>
    </head>
    <body>
        <img src="google.jpg" height="150px" width="200px"/>
        <figcaption style="color: orange;">Google Classroom Icon</figcaption>
    </body>
    </html>
    `,
    title: `7.Figcaption Tag`,
    className:`output-box`,
    usage: <> <p>
    The <code>&lt;figcaption&gt;</code> tag defines a caption for a &lt;figure&gt; element.<br/><br/>

      The <code>&lt;figcaption&gt;</code> element can be placed as the first or last child of the &lt;figure&gt; element.        
  </p></>,
    output: `outputfiles/figcaption.html`,
  },
  {
    id: 8,
    codeString: `<!DOCTYPE html>
    <html> <head>
        <title>Document</title>
        <base href="https://www.google.com" target="_black">
    </head>
    <body>
        <center>
            <a href="search?q=yahoo">Click Me</a>
        </center>
    </body>
    </html>
    `,
    title: `8.Base Tag`,
    className:`output-box`,
    usage: <><p> The <code>&lt;base&gt;</code> tag specifies the base URL and/or target for all relative URLs in a document.<br/><br/>

    The <code>&lt;base&gt;</code> tag must have either an href or a target attribute present, or both.<br/><br/>
    
    There can only be one single <code>&lt;base&gt;</code> element in a document, and it must be inside the <code>&lt;head&gt;</code> element.
    </p>
    </>,
    output: `outputfiles/base.html`,
  },
  {
    id: 9,
    codeString: `<!DOCTYPE html>
    <html> <head>
        <title>Document</title>
    </head>
    <body>
            <label for="disk_c">Disk Usage C:</label>
            <meter id="disk_c" min="0" max="20" value="17">17GB out of 20GB</meter>
       
    </body>
    </html>
    `,
    title: `9.Label And Meter Tag`,
    className:`output-box ml-0`,
    usage: <><p>The <code>&lt;meter&gt;</code> tag defines a scalar measurement within a known range, or a fractional value. This is also known as a gauge.<br/><br/>

    Examples: Disk usage, the relevance of a query result, etc.<br/><br/>
    
    Note: The <code>&lt;meter&gt;</code> tag should not be used to indicate progress (as in a progress bar). For progress bars, use the <code>&lt;progress&gt;</code> tag.<br/>
    
    Tip: Always add the <code>&lt;label&gt;</code> tag for best accessibility practices!</p>
    </>,
    output: `outputfiles/ml.html`,
  },
  {
    id: 10,
    codeString: `<!DOCTYPE html>
    <html>
      <html> <head>
        <title>Document</title>
      </head>
      <body>
        <select>
          <option>Selet Sub-Subject</option>
          <optgroup label="B.Sc. I.T." />
          <option>C++</option>
          <option>Android</option>
          <option>IT TOOLS</option>
          <option>PD</option>
          <option>D.B.M.S</option>
          <option>SM</option>
          <optgroup label="BCA Sci." />
          <option>C++</option>
          <option>Mobile Repairing</option>
          <option>Compter Geaphics</option>
          <option>PD</option>
          <option>SM</option>
          <option>D.B.M.S.</option>
        </select>
      </body>
    </html>`,
    title: `10.Dropdown List`,
    className:`output-box d-down`,
    usage: <><p>The <code>&lt;option&gt;</code> tag defines an option in a select list.<br/>

    <code>&lt;option&gt;</code> elements go inside a <code>&lt;select&gt;</code>, <code>&lt;optgroup&gt;</code>, or <code>&lt;datalist&gt;</code> element.<br/>
    
    Note: The <code>&lt;option&gt;</code> tag can be used without any attributes, but you usually need the value attribute, which indicates what is sent to the server on form submission.<br/>
    
    Tip: If you have a long list of options, you can group related options within the <code>&lt;optgroup&gt;</code> tag. </p>
    </>,
    output: `outputfiles/dropdown.html`,
  },
  {
    id: 11,
    codeString: `<!DOCTYPE html>
    <html>
      <html> <head>
        <title>Document</title>
      </head>
      <body>
        <figure style="border: solid; width: 200px">
          <img src="google.jpg" height="270px" width="200px" alt="Image" />
          <figcaption>Google</figcaption>
        </figure>
      </body>
    </html> `,
    title: `11.Figure Tag`,
    className:`output-box`,
    usage: <><p>The <code>&lt;figure&gt;</code> tag specifies self-contained content, like illustrations, diagrams, photos, code listings, etc.<br/><br/>

    While the content of the <code>&lt;figure&gt;</code> element is related to the main flow, its position is independent of the main flow, and if removed it should not affect the flow of the document.<br/><br/>
    
    Tip: The <code>&lt;figcaption&gt;</code> element is used to add a caption for the <code>&lt;figure&gt;</code> element.</p>
    </>,
    output: `outputfiles/figure.html`,
  },
  {
    id: 12,
    codeString: `<!DOCTYPE html>
    <html>
      <html> <head>
        <title>Document</title>
      </head>
      <body>
        <label>Downloading Progress</label><br /><br />
        <progress value="20" max="100"></progress>
      </body>
    </html>`,
    title: `12.Progress Tag`,
    className:`output-box`,
    usage: <><p>The <code>&lt;progress&gt;</code> tag represents the completion progress of a task.<br/>

    Tip: Always add the <code>&lt;label&gt;</code> tag for best accessibility practices</p>
    </>,
    output: `outputfiles/progress.html`,
  },
  {
    id: 13,
    codeString: `<!DOCTYPE html>
    <html>
      <html> <head>
        <title>Document</title>
      </head>
      <body>
        <h3>This is online class</h3>
        <p>E-Learning</p>
        <dialog open>E-Learning</dialog>
      </body>
    </html>`,
    title: `13.Dialog Tag`,
    className:`output-box`,
    usage: <> <p>
    The <code>&lt;dialog&gt;</code> tag defines a dialog box or subwindow.<br/>

      The <code>&lt;dialog&gt;</code> element makes it easy to create popup dialogs and modals on a web page.
  </p>
    </>,
    output: `outputfiles/dialog.html`,
  },
  {
    id: 14,
    codeString: `<!DOCTYPE html>
    <html>
      <html> <head>
        <title>Document</title>
      </head>
      <body>
        <form oninput="res.value=parseInt(a.value)+parseInt(b.value);">
          <input type="text" name="a" value="" required /><br /><br />
          <input type="text" name="b" value="" required /><br /><br />
          Addition = <output name="res"></output>
        </form>
      </body>
    </html>
    `,
    title: `14.Output Tag`,
    className:`output-box`,
    usage: <><p>
    <code>&lt;output&gt;</code> tag is used to represent the result of a calculation (like one performed by a script).
    </p>
    </>,
    output: `outputfiles/output.html`,
  },
  {
    id: 15,
    codeString: `<!DOCTYPE html>
    <html>
      <html> <head>
        <title>Document</title>
      </head>
      <body>
        <p>
          This is B.Sc. I.T. Second year class. It is <del>Online</del> Regular
          class.
        </p>
      </body>
    </html>`,
    title: `15.Del Tag`,
    className:`output-box`,
    usage: <><p>The <code>&lt;del&gt;</code> tag defines text that has been deleted from a document. Browsers will usually strike a line through deleted text.</p>
    </>,
    output: `outputfiles/del.html`,
  },
  {
    id: 16,
    codeString: `<!DOCTYPE html>
    <html>
      <html> <head>
        <title>Document</title>
      </head>
      <body>
        <h3>This is example of color group tag</h3>
        <table border="2px">
          <colorgroup>
            <col style="background-color: green; font-size: 130x" />
            <col style="background-color: orange; width: 40px" />
          </colorgroup>
          <tr>
            <th>Class name</th>
            <th>Subject name</th>
          </tr>
          <tr>
            <td>BSc IT</td>
            <td>IT TOOL</td>
          </tr>
        </table>
      </body>
    </html>`,
    title: `16.Color Group Tag`,
    className:`output-box`,
    usage: <> <p>The <code>&lt;colgroup&gt;</code> tag specifies a group of one or more columns in a table for formatting.<br/>

    The <code>&lt;colgroup&gt;</code> tag is useful for applying styles to entire columns, instead of repeating the styles for each cell, for each row.<br/>
    
    Note: The <code>&lt;colgroup&gt;</code> tag must be a child of a <code>&lt;table&gt;</code> element, after any <code>&lt;caption&gt;</code> elements and before any <code>&lt;thead&gt;</code>, <code>&lt;tbody&gt;</code>, <code>&lt;tfoot&gt;</code>, and <code>&lt;tr&gt;</code> elements.<br/>
    
    Tip: To define different properties to a column within a <code>&lt;colgroup&gt;</code>, use the <code>&lt;col&gt;</code> tag within the <code>&lt;colgroup&gt;</code> tag.</p>
    </>,
    output: `outputfiles/color.html`,
  },
  {
    id: 17,
    codeString: `<!DOCTYPE html>
    <html>
      <html> <head>
        <title>Document</title>
      </head>
      <body>
        <audio controls>
          <source src="outputfiles/song.mp3" type="audio/mp3" />
        </audio>
      </body>
    </html>`,
    title: `17.Audio Tag`,
    className:`output-box`,
    usage: <><p>The HTML <code>&lt;audio&gt;</code> tag is used to add any audio file to a webpage. HTML helps you to add multimedia files on your website by providing various multimedia tags/elements like <code>&lt;audio&gt;</code>, <code>&lt;video&gt;</code>, <code>&lt;embed&gt;</code> and <code>&lt;object&gt;</code>.</p>
    </>,
    output: `outputfiles/audio.html`,
  },
];
export default HtmlData;