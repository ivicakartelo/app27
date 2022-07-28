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

            <img src="assets/images/2.jpg" />
            <div className="grid3"><h1>Topic:</h1></div>
            <div className="grid6">    
                <article>
                <Contact />
                </article>
            <div className="grid3"></div>
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