import React, {Component} from "react";
import * as messagetypes from './../constants/Message';

class CartItem extends Component {

    showSubTotal = (currentPrice, quantity) => {
        return currentPrice * quantity;
    }

    onDelete = (product) => {
        var {onDeleteProductInCart, onChangeMessage} = this.props;
        onDeleteProductInCart(product);
        onChangeMessage(messagetypes.MSG_DELETE_PRODUCT_IN_CART_SUCCESS);
    }

    onUpdateQuantity = (product, quantity) => {
        if(quantity > 0) {
            var {onUpdateProductInCart, onChangeMessage} = this.props;
            onUpdateProductInCart(product, quantity);
            onChangeMessage(messagetypes.MSG_UPDATE_CART_SUCCESS);
        }
    }

    render() {
        var {item} = this.props;
        var {quantity} = item
        return (
            
            <tr className="">
                <th scope="grid-row">
                    <img className="cart-item-image" src={item.product.image} alt={item.product.name}/>
                </th>

                <td >
                    <h3>
                    <strong>{item.product.name}</strong>
                    </h3>
                </td>

                <td className="cart-product-table">
                    {item.product.currentPrice}$
                </td>
                
                <td className="cart-product-table">
                    <span className="">{quantity} </span>
                    <div className="btn-group" data-toggle="buttons">
                    <label 
                    className="btn btn--primary"
                    onClick={() => this.onUpdateQuantity(item.product, item.quantity - 1)}
                    >
                        <a className="cart-product-table">—</a>
                    </label>
                    <label 
                    className="btn btn--primary"
                    onClick={() => this.onUpdateQuantity(item.product, item.quantity + 1)}
                    >
                        <a className="cart-product-table">+</a>
                    </label>
                    </div>
                </td>
                    
                <td className="cart-product-table">
                    {this.showSubTotal(item.product.currentPrice, item.quantity)}$
                </td>
                <td>
                    <button 
                    type="button" 
                    className="btn btn--primary" data-toggle="tooltip"
                    data-placement="top" 
                    title data-original-title="Remove item"
                    onClick={() => this.onDelete(item.product)}
                    >
                    Xóa
                    </button>
                </td>
            </tr>
        )
    }
}

export default CartItem;
