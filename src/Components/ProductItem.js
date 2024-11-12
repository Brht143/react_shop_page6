import smile from '../smile.jpg';

const ProductItem = (props) =>
    <div key = {props.cookie.id} className = "cookie">
        <img src={smile}></img>
        <h3>{props.cookie.name}</h3>
        <p>{props.cookie.price} K.D.</p>
    </div>;

export default ProductItem;