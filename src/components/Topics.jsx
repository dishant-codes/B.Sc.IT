import React from 'react';
import Html from "./html_box";
const Topics=()=>{
    return(
        HtmlData.slice(pagination.start, pagination.end).map((val,ind)=>{
            return <Html key={ind} use={val.usage} classname={val.className} display={val.output} heading={val.title} htmlcode={val.codeString}/>
          })
    );
}
export default Topics;