import { Link } from 'react-router-dom';

export default function Header() {
    return (
    <ul>
        <li><Link to="/">Home Page</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/testimony">Testimony</Link></li>
        <li><Link to="/arraymap">ArrayMap</Link></li>
    </ul>   
    )
}