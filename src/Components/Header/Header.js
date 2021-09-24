import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Header.css';
import logo from '../../images/logo.png';

const Header = () => {
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className="header">
            <div>
            <img src={logo} alt="" /> 
            </div>     
            <nav>    
                <a href="./Shop"> Shop </a>
                <a href="./Order Review">Order Review</a>
                <a href="./Manage Inventory here">Manage Inventory here</a>
            </nav>  

            <div className="btn-search">
                <input type="text" placeholder="Search Your products">
                </input> <span className="cartIcon">{cartIcon}</span>
            </div>  


        </div>
    );
};


<p></p>

export default Header;