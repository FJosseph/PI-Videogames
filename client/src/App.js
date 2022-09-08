import './App.css';
import { Switch, Route } from "react-router-dom";
import LandingPage from './components/LandingPage';
import Home from './components/Home';
import NavBar from './components/Navbar';
import GameDetail from './components/GameDetail';
import FormAdd from './components/FormAdd';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/'>
          <LandingPage/>
        </Route>
        <Route strict path='/home'>
          <NavBar/>
          <Home/>    
        </Route>
        <Route strict path='/detail/:id'>
          <GameDetail/>
        </Route>
        <Route strict path='/addgame'>
          <FormAdd/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
