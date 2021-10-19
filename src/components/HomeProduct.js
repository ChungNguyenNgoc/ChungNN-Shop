import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class HomeProduct extends Component {
    
    render() {
        var {product} = this.props;
        var {match} = this.props;
        var {index} = this.props;
        var url = match.url;

        return(
            <div className="grid__column-2-4">
            <Link to={`${url}${product.slug}`} key={index} className="home-product-item">
            <div className="home-product-item__img" style={{backgroundImage: `url(${product.image})`}} />
            <h4 className="home-product-item__name">{product.name}</h4>
            <div className="home-product-item__price">
                <span className="home-product-item__price-old">{product.oldPrice}$</span>
                <span className="home-product-item__price-current">{product.currentPrice}$</span>
            </div>
            <div className="home-product-item__action">
                <span className="home-product-item__like home-product-item__liked">
                <i className="home-product-item__like-icon far fa-heart" />
                <i className="home-product-item__liked-icon fas fa-heart" />
                </span>
                <div className="home-product-item__rating">
                {/* <i class="far fa-star"></i> */}
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                </div>
                <span className="home-product-item__sold">{product.description}</span>
            </div>
            <div className="home-product-item__origin">
                <span className="home-product-item__origin-name">PhòTrạch-PhongĐiền-TT.Huế</span>
            </div>
            <div className="home-product-item__favourite">
                <i>Xử lý đơn hàng bởi ChungNN-Shop</i>
            </div>
            <div className="home-product-item__sale-off">
                <div><span className="home-product-item__sale-off-percent">10%</span></div>
                <div><span className="home-product-item__sale-off-label">GIẢM</span></div>
            </div>
            </Link>
            </div>
        )
    }
}

export default HomeProduct;
