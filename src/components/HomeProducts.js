import React, {Component} from 'react';

class HomeProducts extends Component {
    render() {
        return(
            <div className="grid__column-10">
            <div className="home-filter">
                <span className="home-filter__label">Sắp xếp theo</span>
                <button className="home-filter__btn home-filter__btn2 btn btn--primary">Phổ Biến</button>
                <button className="home-filter__btn home-filter__btn2 btn btn--primary">Mới Nhất</button>
                <button className="home-filter__btn home-filter__btn2 btn btn--primary">Bán Chạy</button>
                <div className="select-input">
                <span className="select-input__label">Giá</span>
                <i className="select-input__label-icon fas fa-chevron-down" />
                <ul className="select-input__list">
                    <li className="select-input__item">
                    <a className="select-input__link">Giá: Thấp đến Cao</a>
                    </li>
                    <li className="select-input__item">
                    <a className="select-input__link">Giá: Cao đến Thấp</a>
                    </li>
                </ul>
                </div>
                <div className="home-filter__page">
                <span className="home-filter__page-num">
                    <span className="home-filter__page-current">1</span>/2
                </span>
                <div className="home-filter__page-control">
                    <a className="home-filter__page-btn home-filter__page-btn--disabled">
                    <i className="home-filter__page-btn-icon fas fa-chevron-left" />
                    </a>
                    <a className="home-filter__page-btn">
                    <i className="home-filter__page-btn-icon fas fa-chevron-right" />
                    </a>
                </div>
                </div>
            </div>
            <div className="home-product">
                <div className="grid__row" id="chung">
                    {this.props.children}
                </div>
            </div>
            <ul className="pagination home--pagination">
                <li className="pagination-item">
                <a className="pagination-item__link">
                    <i className="pagination-item__icon fas fa-chevron-left" />
                </a>
                </li>
                <li className="pagination-item pagination-item--active">
                <a className="pagination-item__link">1</a>
                </li>
                <li className="pagination-item">
                <a className="pagination-item__link">2</a>
                </li>
                <li className="pagination-item">
                <a className="pagination-item__link">
                    <i className="pagination-item__icon fas fa-chevron-right" />
                </a>
                </li>
            </ul>
            </div>
        )
    }
}

export default HomeProducts;
