import ProductsData from '../data/products-data';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductsNames from '../components/ProductsNames';

export default function ProductPage({ match }) {
    const id = match.params.id;
    const product = ProductsData.find(x => x.id === id);
    
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
                    <h1>{product.name}</h1>
                    {product.description.map((paragraph, key) => (
                    <p key={key}>
                    {paragraph}
                    </p>
                    ))}
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