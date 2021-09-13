import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Classes from "./components/Classes/Classes";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import Signin from "./components/Signin/Signin";
import Signup from "./components/Signup/Signup";
import './global.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar/>
      <div className="App">
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/About' component={About}/>
          <Route path='/Contact' component={Contact}/>
          <Route path='/Classes' component={Classes}/>
          <Route path='/Signin' component={Signin}/>
          <Route path='/Signup' component={Signup}/>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
