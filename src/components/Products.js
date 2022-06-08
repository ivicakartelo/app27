import ProductsData from '../data/products-data';
import { Link } from 'react-router-dom';

function ProductsList({products}) {
    return (
        <ul>
            {products.map((product) =>
            <div className="products">
                <li key={product.id}>
                    <Link  to={`/${product.id}`}>
                    <h5>{product.name}</h5>
                    </Link>
                    {product.description[1].substring(0, 150)}...
                </li>
            </div>
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