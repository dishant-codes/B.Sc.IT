import React,{useState} from 'react';
import { NavLink } from 'react-router-dom';
import HtmlData from "./HtmlData";
import Html from "./html_box";
import Pagination from "./Pagination";


const Htmlcode = () => {  

  const [showPerPage ] = useState(3);
  const [pagination, setPagination]=useState({
    start:0,
    end:showPerPage,
  })

  const onPaginationChange = (start, end)=>{
   setPagination({start:start,end:end});
  }

    
 return ( 
    <> 
    <div className="container pt-3" style={{backgroundColor:"white"}}>
    <h1 className="Sub-title text-center">IT-Tools and Web Designing</h1>
     <hr/>
      <div id="wrapper">
        <div id="sidebar-wrapper">
          <ul class="sidebar-nav">
          <h2 className="topic-title">Topics</h2>
            <li><NavLink to="/B.Sc.IT/it-tools" className="topic-link topic-active">HTML5 Tags</NavLink></li>
            <li><NavLink to="/B.Sc.IT/it-tools/drag" className="topic-link">Drag & Drop</NavLink></li>
          </ul>
        </div>
        <div id="page-content-wrapper">
          <div class="page-content">
            <div class="container">
              <div class="row">
                <div class="col-md-12">
                    {
                      HtmlData.slice(pagination.start, pagination.end).map((val,ind)=>{
                        return <Html key={ind} use={val.usage} classname={val.className} display={val.output} heading={val.title} htmlcode={val.codeString}/>
                      })
                    }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr style={{width:"18rem",height:"2px"}}/> 
    </div>
      <div className="container">
      <Pagination  showPerPage={showPerPage} 
      onPaginationChange={onPaginationChange}
      total={HtmlData.length}/> 
      </div>
 </>
  );
};

export default Htmlcode;