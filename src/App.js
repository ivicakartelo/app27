import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import TestimonyPage from './pages/TestimonyPage';
import ProductPage from './pages/ProductPage';


export default function App() {
  return (
    <Router>     
      <Switch>
        <Route path="/" component={HomePage} exact /> 
        <Route path="/about" component={AboutPage} />
        <Route path="/contact" component={ContactPage} />     
        <Route path="/testimony" component={TestimonyPage} />
        <Route path="/:id" component={ProductPage} />
      </Switch>                        
    </Router>
  );
}