import ProductsData from '../data/products-data';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ProductPage({ match }) {
    const id = match.params.id;
    const product = ProductsData.find(x => x.id === id);

    return (
        <>
        <header>
            <Header />
        </header>
        
            <h1>{product.name}</h1>
            {product.description.map((paragraph, key) => (
            <p key={key}>
                {paragraph}
            </p>
            ))}
        <footer>
            <Footer />
        </footer>
        
        </>
    );		
}