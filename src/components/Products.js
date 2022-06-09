import ProductsData from '../data/products-data';
import { Link } from 'react-router-dom';

function ProductsList({products}) {
    return (
        <ul className="products">
            {products.map((product) =>
            <article>
                <li key={product.id}>
                    <Link  to={`/${product.id}`}>
                    <h2>{product.name}</h2>
                    </Link>
                    {product.description[1].substring(0, 150)}...
                </li>
            </article>
            )
            }
        </ul>
    );   
}
export default function Products() {
    return (
    <>     
        <ProductsList products={ProductsData} /> 
    </> 
    );
}