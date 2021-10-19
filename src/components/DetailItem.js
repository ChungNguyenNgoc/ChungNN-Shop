import React, {Component} from 'react'
import * as messagetypes from './../constants/Message';
import {Link} from 'react-router-dom';

class DetailItem extends Component {

    showRatings(rating) {
        var result = [];
        for(var i = 1; i <= rating; i++) {
            result.push(<i key={i} className="product-desc__rating-item fas fa-star" />);
        }
        for(var j = 1; j <= (5 - rating); j++) {
            result.push(<i key={i + j} className="product-desc__rating-item far fa-star" />);
        }
        return result;
    }

    onAddToCart = (product) => {
        this.props.onAddToCart(product);
        this.props.onChangeMessage(messagetypes.MSG_ADD_TO_CART_SUCCESS);
    }

    render() {
        var {product} = this.props;
        return(<div>
            <div className="grid-heading">       
            <Link to="/" className="grid-heading-link">
            <span className="grid-heading-item">ChungNN-Shop</span>
            </Link>
            <i className="grid-heading-icon fas fa-chevron-right" />
            <span className="grid-heading-item">{product.name}</span>
            </div>
            <div className="grid__row product-briefing">
            <div className="grid__column-5">
            <div className="home-product-item__img" id="home-product-item__img" style={{backgroundImage: `url(${product.image})`}} />
            </div>
            <div className="grid__column-7">
            <div className="product-desc">
                <h3 className="product-desc__header" id="product-desc__header__id">{product.name}</h3>
                <div className="product-desc__rating mar-btm-20">
                <div className="product-desc__rating-list">
                    {/* <i className="product-desc__rating-item fas fa-star" /> */}
                    {this.showRatings(product.rating)}
                </div>
                <div className="product-desc__feedback">
                    <a href="#" className="product-desc__feedback-link">1.6k Đánh giá</a>
                    <a href="#" className="product-desc__feedback-link">{product.description}</a>
                </div>
                </div>
                <div className="product-desc__price mar-btm-20">
                <div className="product-desc__price-old">{product.oldPrice}$</div>
                <div className="product-desc__price-current" id="product-desc__price-current">{product.currentPrice}$</div>
                <div className="product-desc__price-discount">Giảm 10%</div>
                </div>
                <div className="product-optioncolor mar-btm-20">
                <label className="product-optioncolor__name">Phân loại</label>
                <select className="product-optioncolor__option">
                    <option className="product-optioncolor__option-item">SilVer</option>
                    <option className="product-optioncolor__option-item">Graphite</option>
                    <option className="product-optioncolor__option-item">Gold</option>
                    <option className="product-optioncolor__option-item">Pacific Blue</option>
                </select>
                </div>
                <div className="product-desc__quantity mar-btm-20">
                <form action="#" className="product-desc__quantit-form mar-btm-20">
                    <span className="product-desc__quantit-form-item">Số lượng</span>
                    <input className="product-desc__quantity-input" type="number" min={1} defaultValue={1} />
                    <span className="product-desc__quantit-form-item">Còn 40 sản phẩm</span>
                </form>
                <div className="product-desc__actions">
                    <div className="product-desc__actions-add-cart btn btn--primary" onclick="addItemToCart(title, price, img)">
                    <i className="product-desc__actions-add-cart-icon fas fa-cart-plus" />
                    <a href 
                        className="product-desc__actions-add-cart-link" 
                        title data-original-title="Add to Cart" 
                        onClick={() => this.onAddToCart(product)}>Thêm vào giỏ hàng</a>
                    </div>
                </div>
                </div>
                <div className="product-desc__socila-sharing">
                <ul className="product-desc__socila-sharing-list">
                    <li className="product-desc__socila-sharing-item">Chia sẽ</li>
                    <li><a href className="product-desc__socila-sharing-item-link"><i className="product-desc__socila-sharing-item-facebook fab fa-facebook" /></a></li>
                    <li><a href className="product-desc__socila-sharing-item-link"><i className="product-desc__socila-sharing-item-twitter fab fa-twitter" /></a></li>
                    <li><a href className="product-desc__socila-sharing-item-link"><i className="product-desc__socila-sharing-item-messenger fab fa-facebook-messenger" /></a></li>
                    <li><a href className="product-desc__socila-sharing-item-link"><i className="product-desc__socila-sharing-item-pinterest fab fa-pinterest" /></a></li>
                </ul>
                </div>
                <div className="home-desc-origin">
                <span className="home-desc-origin__name">ĐC: Phò Trạch - Phong Điền - Thừa Thiên Huế</span>
                </div>
            </div>
            </div>
        </div>
        </div>
       
        )
    }
}

export default DetailItem;
