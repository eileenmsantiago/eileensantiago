import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Home } from './Home';
import { About } from './About';
import { Contact } from './Contact';
import { NoMatch } from './NoMatch';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
            <Route component={NoMatch}/>
          </Switch>
        </Router>
      </React.Fragment>
    )
  }
}
// function App() {
//   return (
//     <div className="App">
//       <React.Fragment>
//         <Router>
//           <Switch>
//             <Route exact path="/" component={Home}/>
//             <Route path="/about" component={About}/>
//             <Route path="/contact" component={Contact}/>
//             <Route component={NoMatch}/>
//           </Switch>
//         </Router>

//       </React.Fragment>
//     </div>
//   );
// }

export default App;
