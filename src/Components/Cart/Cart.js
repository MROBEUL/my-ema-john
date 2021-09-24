import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;
    let total = 0;
    for(const product of cart){
        total = total + product.price;
    }
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
    const shipping = total * .09;
    const totalWithoutTax = total + shipping;
    const tax = totalWithoutTax * .12
    const grandtotal = total + shipping + tax;

    return (
        <div>
            <div className="order-cart">
                <h3>Ordered Summary</h3>
                <p>Ordered Items: {props.cart.length} </p>
            </div>
            <div className="order-cost">
                <p>Items Cost: ${total.toFixed(2)}</p>
                <p>Shipping & Handling:<span>${shipping.toFixed(2)}</span></p>
                <p>Total before tax:<span>${totalWithoutTax.toFixed(2)}</span> </p>
                <p>Estimated Tax:<span>${tax.toFixed(2)}</span>  </p>
                <h3 className="total-cost">
                    Order Total:<span>${grandtotal.toFixed(2)}</span> </h3>
            </div>
            <button className="btn-review">{cartIcon} Review Your Products</button>
            
        </div>
    );
};

export default Cart;