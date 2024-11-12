import ProductItem from './ProductItem';
import cookiesList  from '../data/products';

// each iteration it will pass one obj from the arr

const ProductsList = () => cookiesList.map( cookie => <ProductItem cookie={cookie}/>);

export default ProductsList;
