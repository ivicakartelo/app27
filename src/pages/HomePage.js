import Home from '../components/Home';
import Products from '../components/Products';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function HomePage() {
    return (
      <>
      <header>
        <Header />
      </header>
        <Home />
      
        <Products />
      
      <footer>
        <Footer />
      </footer>
        
      </>  
    )
}