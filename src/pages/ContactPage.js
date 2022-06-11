import Header from '../components/Header';
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import ProductsNames from '../components/ProductsNames';

export default function ContactPage() {
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
        
            <div className="grid9">    
                <article>
                <Contact />
                </article>
            </div>

            <div className="grid3">
                <aside>
                    <ProductsNames />
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
    );
  }