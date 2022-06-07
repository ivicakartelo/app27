import ProductsData from '../data/products-data';
import { Link } from 'react-router-dom';

function ProductsList({products}) {
    return (
        <ul>
            {products.map((product) => 
                <li key={product.id}>
                    <Link  to={`/${product.id}`}>
                        <h5>{product.name}</h5>
                    </Link>
                </li>
                )
            }
        </ul>
    );   
}
export default function ProductsNames() {
    return (
    <>     
        <ProductsList products={ProductsData} /> 
    </> 
    );
}