import React, {Component} from "react";
import {connect} from 'react-redux';
import * as actions from './../actions/index';
import PropTypes from 'prop-types';
import Header from "../components/Header";
import CartInHeader from '../components/CartInHeader';

 
class HeaderContainer extends Component {

    showCartInHeader = (cart) => {
        var result = null;
        if(cart.length > 0) {
            result = cart.map((item, index) => {
                return (
                    <CartInHeader 
                    key={index}
                    item={item}
                    index={index}
                    />
                )
            })
        }
        return result;
    }

    render() {
        var {cart} = this.props;
        var {searchProduct} = this.props;

        return (
            <Header 
                cart={cart}
                searchProduct={searchProduct}
            >
                {this.showCartInHeader(cart)}
            </Header>
        )
    }
}

HeaderContainer.propTypes = {
    cart: PropTypes.arrayOf(PropTypes.shape({
        product: PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            inventory: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired,
        }).isRequired,
        quanity: PropTypes.number.isRequired,
    })).isRequired,
    searchProduct: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart,
        products: state.products,
        keyword: state.search,
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        searchProduct: (keyword) => {
            dispatch(actions.searchProduct(keyword))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
