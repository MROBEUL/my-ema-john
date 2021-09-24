import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faStar } from '@fortawesome/free-solid-svg-icons';
import './Products.css';

const Products = (props) => {
    // console.log(props);
const {name, img, price, seller, stock, } = props.product;

const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
const starIcon = <FontAwesomeIcon icon={faStar} />

    return (
        <div className="product-container"> 
            <div>
                <img src={img} alt="" />
            </div>
            <div className="features">
                <div>
                <h4 className="prodct-name"> {name}</h4>
                <p> By : {seller}</p>
                <p>Price:  ${price}</p>
                <p> only {stock} left in stock - order soon </p>
                <button 
                    onClick= {() => props.handleAddToCart(props.product)} 
                    className="add-cart"> {cartIcon}  Add to Cart
                </button>
                </div>
                <div>
                   <br />
                   <br />
                   <br />
                   <br />
                   <br />
                    <span className="rating-icin">{starIcon}{starIcon}{starIcon}{starIcon}{starIcon}</span>
                    <h3>Features  </h3>
                </div>
            </div>
        </div>

    );
};

export default Products;