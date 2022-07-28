import Header from '../components/Header';
import Footer from '../components/Footer';
import About from '../components/About';
import ProductsNames from '../components/ProductsNames';

export default function AboutPage() {
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

            <img src="assets/images/3.jpg" />

            <div className="grid3"><h1>Topic:</h1></div>
            <div className="grid6">    
                <article>
                    <About />
                </article>
            </div>
            <div className="grid3"></div>
            
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