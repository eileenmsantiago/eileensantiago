import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Work from '../../pages/Work/Work';
import About from '../../pages/About/About';
import Contact from '../../pages/Contact/Contact';
import Nav from '../Nav/Nav';
import { NoMatch } from '../../NoMatch';
import Footer from '../Footer/Footer';

class App extends Component {
  render() {
    return (
      <Router>
        <Nav/>
        <main>
          <Switch>
            <Route exact path="/" component={Work}/>
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
