import React, { Component } from 'react';
import { 
  BrowserRouter as Router, 
  Route, 
  Switch
} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Header from './ui/Header/Header';
import { NoMatch } from './NoMatch';
import './styles/main.scss';
import Footer from './ui/Footer/Footer';

class App extends Component {
  render() {
    return (
      <Router>
        <Header/>
        <main>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
            <Route component={NoMatch}/>
          </Switch>
        </main>
        <Footer/>
      </Router>
    )
  }
}


export default App;
