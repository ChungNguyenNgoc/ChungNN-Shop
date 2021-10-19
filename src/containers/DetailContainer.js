import React, {Component} from "react";
import {connect} from 'react-redux';
import Detail from "../components/Detail";
import DetailItem from "../components/DetailItem";
import PropTypes from 'prop-types';
import {actAddToCart, actChangeMessage} from './../actions/index';

class DetailContainer extends Component {
    
    showDetail(products) {
        var result = null;
        var {match} = this.props;
        var slug = match.params.slug;
        var {onAddToCart, onChangeMessage} = this.props;

        if(products.length > 0) {
            result = products.map((product, index) => {
                if(slug === product.slug) {
                    return <DetailItem 
                    key = {index} 
                    product = {product} 
                    onAddToCart = {onAddToCart}
                    onChangeMessage = {onChangeMessage}
                    />
                }
            })
        }
        return result;
    }

    render() {
        var {products} = this.props;
        return (
            <Detail>
                {this.showDetail(products)}
            </Detail>
        )
    }
}

DetailContainer.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            oldPrice: PropTypes.number.isRequired,
            currentPrice: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired,
        })
    ).isRequired,
    onAddToCart: PropTypes.func.isRequired,
    onChangeMessage: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
    return {
        products: state.products,
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddToCart: (product) => {
            dispatch(actAddToCart(product, 1))
        },
        onChangeMessage: (message) => {
            dispatch(actChangeMessage(message))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailContainer);
