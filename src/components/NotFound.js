import React, {Component} from 'react'

class NotFound extends Component {
    render() {
        return(
            <div className="app">
                <div className="app__container">
                    <div className="error">
                        <div className="ground-color">
                        <div className="container-error-404">
                            <div className="clip"><div className="shadow"><span className="digit thirdDigit">4</span></div></div>
                            <div className="clip"><div className="shadow"><span className="digit secondDigit">0</span></div></div>
                            <div className="clip"><div className="shadow"><span className="digit firstDigit">4</span></div></div>
                            <div className="msg">OH!<span className="triangle" /></div>
                        </div>
                        <h2 className="h1">Xin lỗi! Không tìm thấy trang</h2>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default NotFound;
