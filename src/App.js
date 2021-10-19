import React, {Component} from 'react';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';
import routes from './router';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HeaderContainer from './containers/HeaderContainer';



class App extends Component {

    showContentMenus = (routes) => {
        var result = null;
        if(routes.length >0) {
            result = routes.map((route, index) => {
                return(
                    <Route 
                        key={index}
                        path={route.path} 
                        exact={route.exact} 
                        component={route.main} 
                    />
                )
            })
        }
        return result;
    }

    render() {
        return(
            <Router>
                <HeaderContainer />
                <Switch>
                    {this.showContentMenus(routes)}
                </Switch>
                <Footer />
            </Router>
        )
    }
}

export default App;
