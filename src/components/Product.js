import ProductsData from '../data/products-data';

export default function Product({ match }) {
    const id = match.params.id;
    const product = ProductsData.find(x => x.id === id);

    return (
        <>
        <Header />
            <h1>{product.name}</h1>
            {product.description.map((paragraph, key) => (
            <p key={key}>
                {paragraph}
            </p>
            ))}
        <Footer />
        </>
    );		
}