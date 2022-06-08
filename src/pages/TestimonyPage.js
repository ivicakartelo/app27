import Header from '../components/Header';
import Footer from '../components/Footer';
import Testimony from '../components/Testimony';

export default function TestimonyPage() {
    return (
        <>
        <div className="nav">
            <Header />
        </div>
            
            <Testimony />
        <div className="nav">
            <Footer />
        </div>
            
        </>
    );
  }