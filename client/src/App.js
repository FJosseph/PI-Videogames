import './App.css';
import { Switch, Route } from "react-router-dom";
import LandingPage from './components/LandingPage';
import Home from './components/Home';
import NavBar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/'>
          <LandingPage/>
        </Route>
        <Route exact path='/home'>
          <NavBar/>
          <Home/>    
        </Route>
      </Switch>
    </div>
  );
}

export default App;
