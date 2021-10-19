import React, {Component} from 'react';
import Home from './components/Home';
import NotFound from './components/NotFound';
import CartContainer from './containers/CartContainer'
import DetailContainer from './containers/DetailContainer'

const routes = [
    {
        path: '/',
        exact: true,
        main: ({match}) => <Home match={match}/>
    },
    {
        path: '/cart',
        exact: false,
        main: () => <CartContainer />
    },
    // {
    //     path: '/:slug',
    //     exact: false,
    //     main: ({match}) => <Chungtest match={match}/>
    // },
    {
        path: '/:slug',
        exact: false,
        main: ({match}) => <DetailContainer match={match}/>
    },
    {
        path: '',
        exact: false,
        main: () => <NotFound />
    },
]

export default routes;