import React, {Component} from 'react';
import HomeCategory from './HomeCategory';
import HomeProductsContainer from './../containers/HomeProductsContainer';

class Home extends Component {
    render() {
        var {match} = this.props;

        return(
            <div>
                <div className="app">
                <div className="app__container">
                        <div className="grid">
                            <div className="grid__row">
                                <HomeCategory />
                                <HomeProductsContainer match={match}/> 
                            </div>
                        </div>
                    </div>
  
                </div>
            </div>
        )
    }
}

export default Home;
