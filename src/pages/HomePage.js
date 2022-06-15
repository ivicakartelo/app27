import Home from '../components/Home';
import Products from '../components/Products';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function HomePage() {
    return (
      <>
        <div className="container">
            <div className="grid12">
                <header>
                    <nav>
                        <Header />
                    </nav>
                </header>
            </div>

            <img src="assets/images/1.jpg" />

            <div className="grid12">    
                <article>
                    <Home />
                </article>
            </div>

            <article>
                <Products />
            </article>

            <div className="grid12">
                <hr />
            </div>
            
            <div className="grid12">
                <footer>
                    <Footer />
                </footer>
            </div>
        
        </div>
      </>  
    )
}