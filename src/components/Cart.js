import React, {Component} from "react";
import {Link} from 'react-router-dom';

class Cart extends Component {
    render() {
        var {children} = this.props;
        return (
            <div className="app__container">
                <div className="grid">
                    <div className="grid-heading">       
                    <Link to="/" className="grid-heading-link">
                    <span className="grid-heading-item">ChungNN-Shop</span>
                    </Link>
                    <i className="grid-heading-icon fas fa-chevron-right" />
                    <span className="grid-heading-item">Giỏ hàng</span>
                </div>
                    <section className="section">
                        <div className="table-responsive">
                            <table className="table product-table">
                            <thead>
                                <tr>
                                <th />
                                <th className="cart-product-table">Sản Phẩm</th>
                                <th className="cart-product-table">Giá</th>
                                <th className="cart-product-table">Số Lượng</th>
                                <th className="cart-product-table">Tổng Cộng</th>
                                <th />
                                </tr>
                            </thead>
                            <tbody>
                                {children}
                            </tbody>
                            </table>
                        </div>
                    </section>
                </div>
            </div>
            
        )
    }
}

export default Cart;




