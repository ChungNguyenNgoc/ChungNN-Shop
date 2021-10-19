import React, {Component} from "react";

class CartResult extends Component {

    showTotalAmout = (cart) => {
        var total = 0;
        if(cart.length >0) {
            for(var i = 0; i < cart.length; i++) {
                total += cart[i].product.currentPrice * cart[i].quantity;
            }
        }
        return total;
    }

    render() {
        var {cart} = this.props;
        return (
            <tr>
            <td colSpan={3} />
            <td>
                <h2>
                <strong>Tổng Tiền</strong>
                </h2>
            </td>
            <td>
                <h2>
                <strong>{this.showTotalAmout(cart)}$</strong>
                </h2>
            </td>
            <td colSpan={3}>
                <button type="button" className="btn btn--primary">Mua hàng
                </button>
            </td>
            </tr>
        )
    }
}

export default CartResult;
