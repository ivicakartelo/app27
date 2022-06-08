import Header from '../components/Header';
import Footer from '../components/Footer';
import About from '../components/About';

export default function AboutPage() {
    return (
        <>
        <div className="nav">
            <Header />
        </div>
        
        <About />
        <div className="nav">
            <Footer />
        </div>
        </>
    );
  }