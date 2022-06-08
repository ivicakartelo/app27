import Header from '../components/Header';
import Footer from '../components/Footer';
import Contact from '../components/Contact';

export default function ContactPage() {
    return (
    <>
    <div className="nav">
        <Header />
    </div>
        
        <Contact />
    <div className="nav">
        <Footer />
    </div>
        
    </>
    );
  }