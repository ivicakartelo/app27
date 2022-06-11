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

            <div className="grid6">    
                <article>
                    <Home />
                </article>
            </div>

            <div className="grid6">
                <aside>
                    <Products />
                </aside>
            </div>

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