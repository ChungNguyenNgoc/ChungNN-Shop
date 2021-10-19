import React, {Component} from 'react';

class Detail extends Component {
    render() {
        return(
            <div className="app__container">
                <div className="grid">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Detail;
