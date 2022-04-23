import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './pages/home';
import Signin from './pages/signin';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/signin" component={Signin} />
      </Switch>
    </Router>
  );
}

export default App;

// #FF7663