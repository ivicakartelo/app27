import ProductsData from '../data/products-data';
import { Link } from 'react-router-dom';

function ProductsList({products}) {
    return (
        <>
        {products.map((product) =>
            <div key={product.id} className="grid4">
                <section>
                    <Link  to={`/${product.id}`}>
                        <h5>{product.name}</h5>
                        <img src={product.image} alt={product.alt}/>
                    </Link>
                </section>
            </div>
            )
        }
        </>
    );  
}           

export default function Products() {
    return (
    <>     
        <ProductsList products={ProductsData} /> 
    </> 
    );
}