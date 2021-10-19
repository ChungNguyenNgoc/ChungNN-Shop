import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

class Cart extends Component {
    render() {
        var {item} = this.props
        return (
            <ul className="header__cart-list-item">
                <li className="header__cart-item">
                    <img src={item.product.image} alt="" className="header__cart-img" />
                    <div className="header__cart-item-info">
                    <div className="header__cart-item-info-head">
                        <h5 className="header__cart-item-name">{item.product.name}</h5>
                        <span className="header__cart-item-price">{item.product.currentPrice}</span>
                    </div>
                    </div>
                </li>
            </ul>
        )
    }
}

export default Cart;




