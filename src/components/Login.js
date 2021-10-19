import React, {Component} from 'react'

class Login extends Component {
    render() {
        return(
            <div className="app">
                <div className="app-login">
                <div className="grid">
                    <div className="grid__row">
                    <div className="grid__column-7">
                        <div className="app-login__logo">
                        <span className="app-login__logo-title">𝓒𝓱𝓾𝓷𝓰𝓝𝓝-𝓢𝓱𝓸𝓹</span>
                        <span className="app-login__logo-content">ChungNN-Shop mang đến cho bạn những trải nghiệm công nghệ mới nhất.</span>
                        </div>
                    </div>
                    <div className="grid__column-5">
                        <div className="auth-form">
                        <div className="auth-form__container">
                            <div className="auth-form__header">
                            <h3 className="auth_form__heading">Đăng nhập</h3>
                            </div>
                            <div className="auth-form__form">
                            <div className="auth-form__group">
                                <input type="text" className="auth-form__input" placeholder="Email của bạn" />
                            </div>
                            <div className="auth-form__group">
                                <input type="password" className="auth-form__input" placeholder="Mật khẩu của bạn" />
                            </div>
                            </div>
                            <div className="auth-form__aside">
                            <div className="auth-form__help">
                                <a href className="auth-form__help-link auth-form__help-forgot">Quên mật khẩu</a>
                                <span className="auth-form__help-seperate" />
                                <a href className="auth-form__help-link">Cần trợ giúp?</a>
                            </div>
                            </div>
                            <div className="auth-form__controls">
                            {/* <button class="btn btn-nomal auth-form__controls-back">TRỞ LẠI</button> */}
                            <button className="btn btn--primary btn-auth-form__controls-login">ĐĂNG NHẬP</button>
                            </div>
                        </div>
                        <div className="auth-form__socials">
                            <a href className="auth-form__socials--facebook btn btn--size-s btn--with-icon">
                            <i className="auth-form__socials-icon fab fa-facebook-square" />
                            <span className="auth-form__socials-title">
                                Kết nối với Facebook
                            </span>
                            </a>
                            <a href className="auth-form__socials--google btn btn--size-s btn--with-icon">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/600px-Google_%22G%22_Logo.svg.png" alt="" className="auth-form__socials-img" />
                            <span className="auth-form__socials-title">
                                Kết nối với Google
                            </span>
                            </a>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default Login;
