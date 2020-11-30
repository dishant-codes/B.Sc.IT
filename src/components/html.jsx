import React,{useState} from 'react';
import HtmlData from "./HtmlData";
import Html from "./html_box";
import Pagination from "./Pagination";
const Htmlcode = () => {  
  

  const [showPerPage, setShowPerPage] = useState(5);
  const [pagination, setPagination]=useState({
    start:0,
    end:showPerPage,
  })

  const onPaginationChange = (start, end)=>{
   setPagination({start:start,end:end});
  }
 return ( 
    <> 
    <div className="main-container">
      {
        HtmlData.slice(pagination.start, pagination.end).map((val,ind)=>{
          return <Html key={ind} use={val.usage} classname={val.className} display={val.output} heading={val.title} htmlcode={val.codeString}/>
        })
      } 
      <div className="container">
      <Pagination showPerPage={showPerPage} 
      onPaginationChange={onPaginationChange}
      total={HtmlData.length}/> 
      </div>
  </div>
 </>
  );
};

export default Htmlcode;