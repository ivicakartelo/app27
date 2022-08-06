import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import TestimonyPage from './pages/TestimonyPage';
import ProductPage from './pages/ProductPage';
import ProductsPage from './pages/ProductsPage';
import ArrayMap from './JavaScript6/ArrayMap';


export default function App() {
  return (
    <Router>     
      <Routes>
        <Route path="/" element={<HomePage />} /> 
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />     
        <Route path="/testimony" element={<TestimonyPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/arraymap" element={<ArrayMap />} />

        <Route path="/:id" element={<ProductPage />} />
        
      </Routes>                        
    </Router>
  );
}