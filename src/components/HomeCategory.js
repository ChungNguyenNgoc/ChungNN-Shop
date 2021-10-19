import React, {Component} from 'react'

class HomeCategory extends Component {
    render() {
        return(
            <div className="grid__column-2">
                <nav className="category">
                    <h3 className="caregory__heading">
                    <i className="caregory__heading-icon fas fa-list" />
                    DANH MỤC SHOP
                    </h3>
                    <ul className="category-list">
                    <li className="category-item">
                        <a href className="category-item-link">Sản phẩm</a>
                    </li>
                    <li className="category-item category-item--active">
                        <a href className="category-item-link">iPad</a>
                    </li>
                    <li className="category-item">
                        <a href className="category-item-link">AirPods</a>
                    </li>
                    <li className="category-item">
                        <a href className="category-item-link">iPhone</a>
                    </li>
                    </ul>
                </nav> 
            </div>
        )
    }
}


export default HomeCategory;
