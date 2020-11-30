import './App.css';
import {Route, Switch, Redirect} from "react-router-dom";
import Home from './components/Home';
import Navbar from "./components/Header";
import Syllabus from "./components/syllabus";
import Codehighlight from "./components/cpp";
import Htmlcode from "./components/html";
import Error from "./components/Error";
function App() {
  
  return (
    <div>
      <Navbar/>
      <Switch>
        <Route exact path="/B.Sc.IT" component={Home}/>
        <Route exact path="/B.Sc.IT/home" component={Home}/>
        <Route exact path="/B.Sc.IT/syllabus" component={Syllabus}/>
        <Route exact path="/B.Sc.IT/cpp" component={Codehighlight}/>
        <Route exact path="/B.Sc.IT/it-tools" component={Htmlcode}/>
        <Redirect component={Error}/>
      </Switch>
    </div>
  );
}

export default App;
