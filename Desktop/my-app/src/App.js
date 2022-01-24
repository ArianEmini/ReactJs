
import Navbar from './navbar';
import Content from './content';
import Media from './Media';
import About from './About';
import Contact from './Contact';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar></Navbar>
      <header className="App-header">
      <Switch>
        <Route exact path="/">
        <Content></Content>
        </Route>
        <Route path="/media">
          <Media></Media>
        </Route>
        <Route path="/about">
          <About></About>
        </Route>
        <Route path="/contact">
          <Contact></Contact>
        </Route>
      </Switch>
      </header>
      
    </div>
    </Router>
  );
}

export default App;
