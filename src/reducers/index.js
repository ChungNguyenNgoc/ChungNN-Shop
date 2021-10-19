import {combineReducers} from 'redux';
import products from './products';
import cart from './cart';
import message from './message';
import search from './search';

const appReducers = combineReducers({
    products,
    cart,
    message,
    search,
})

export default appReducers;