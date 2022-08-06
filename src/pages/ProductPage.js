import ProductsData from '../data/products-data';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductsNames from '../components/ProductsNames';
import { useParams } from 'react-router-dom';
import products from '../data/products-data';

export default function ProductPage({ match }) {
    const {id} = useParams;
    const product = ProductsData[id];
    
    
    
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
                <div className="grid12">
                    <img src={product.image} />
                </div>
                <div className="grid3"><h1>Product:</h1></div>
                <div className="grid6">
                <h1>{product.name}</h1>
                    {product.description.map((paragraph, key) => (
                    <p key={key}>
                    {paragraph}
                    </p>
                      ))
                      }
                      <h2>Comments</h2>
                      {product.comments.map((x, key) => (
                        <div key={key}>
                            <p>Rating: {x.rating}</p>
                            <p>Author: {x.author}</p>
                            <p>Date: {x.date}</p>
                            <p>Comment: {x.comment}</p>
                        </div>
                      ))}
                </div>
                
                <div className="grid3"></div>
                    
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
    );		
}