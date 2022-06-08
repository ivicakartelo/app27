import Home from '../components/Home';
import Products from '../components/Products';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function HomePage() {
    return (
      <>
      <div className="nav">
        <Header />
      </div>
        <Home />
      
        <Products />
      
      <div className="nav">
        <Footer />
      </div>
        
      </>  
    )
}