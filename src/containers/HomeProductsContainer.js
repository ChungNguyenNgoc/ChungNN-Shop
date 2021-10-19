import React, {Component} from "react";
import {connect} from 'react-redux';
import HomeProducts from "../components/HomeProducts";
import HomeProduct from "../components/HomeProduct";
import PropTypes from 'prop-types';

class HomeProductsContainer extends Component {
    
    showProducts(products) {
        var result = null;
        var {match} = this.props;
        if(products.length > 0) {
            result = products.map((product, index) => {
                return <HomeProduct 
                            key = {index} 
                            product = {product} 
                            match={match}
                            />
            })
        }
        return result;
    }

    render() {
        var {products, keyword} = this.props;

        // search
        products = products.filter((product) => {
            return product.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1; 
        });

        return (
            <HomeProducts>
                {this.showProducts(products)}
            </HomeProducts>
        )
    }
}

HomeProductsContainer.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            oldPrice: PropTypes.number.isRequired,
            currentPrice: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired,
        }).isRequired,
    )
}

const mapStateToProps = (state) => {
    return {
        products: state.products,
        keyword: state.search,
    }
}

export default connect(mapStateToProps, null)(HomeProductsContainer);
