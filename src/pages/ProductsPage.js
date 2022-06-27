import Products from '../components/Products';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ProductsPage() {
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