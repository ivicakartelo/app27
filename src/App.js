import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Products from './components/Products';
import Testimony from './components/Testimony';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';


function App() {
  return (
    <Router>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/testimony">Testimony</Link></li>
      </ul>
      
        
          <Switch>
            <Route path="/" component={Home} exact /> 
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />     
            <Route path="/products" component={Products} />
            <Route path="/testimony" component={Testimony} />
          </Switch>            
                    
      </Router>
  );
}
export default App;