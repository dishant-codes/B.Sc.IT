import './App.css';
import './sidebar.css';
import {Route, Switch} from "react-router-dom";
import Home from './components/Home';
import Navbar from "./components/Header";
import Syllabus from "./components/syllabus";
import Codehighlight from "./components/cpp";
import Htmlcode from "./components/html";
import Error from "./components/Error";
import Android from "./components/Android";
import Contact from "./components/Contact";
import Drag from "./components/DragAndDrop";
function App() {
  return (
    <>
    <div>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/B.Sc.IT" component={Home}/>
        <Route exact path="/B.Sc.IT/home" component={Home}/>
        <Route exact path="/B.Sc.IT/contact" component={Contact}/>
        <Route exact path="/B.Sc.IT/syllabus" component={Syllabus}/>
        <Route exact path="/B.Sc.IT/cpp" component={Codehighlight}/>
        <Route exact path="/B.Sc.IT/it-tools" component={Htmlcode}/>
        <Route exact path="/B.Sc.IT/it-tools/drag" component={Drag}/>
        <Route exact path="/B.Sc.IT/android" component={Android}/>
        <Route component={Error}/>
      </Switch>
    </div>
        <div className="footer">
        <p>&copy;2021 Dishu-87.github.io | All right reserved.</p> 
     </div>
     </>
  );
}

export default App;
