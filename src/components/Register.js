import React, {Component} from 'react'

class Register extends Component {
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
                            <h3 className="auth_form__heading">Đăng ký</h3>
                            </div>
                            <div className="auth-form__form">
                            <form action method="POST" className="form" id="form-1">
                                <div className="auth-form__group">
                                <input id="fullname" name="fullname" type="text" className="auth-form__input" placeholder="Họ và tên" />
                                <span className="form-message" />
                                </div>
                                <div className="auth-form__group">
                                <input id="email" name="email" type="text" className="auth-form__input" placeholder="Email của bạn" />
                                <span className="form-message" />
                                </div>
                                <div className="auth-form__group">
                                <input id="phone" name="phone" type="tel" className="auth-form__input" placeholder="Số điện thoại của bạn" />
                                <span className="form-message" />
                                </div>
                                <div className="auth-form__group">
                                <input id="password" name="password" type="password" className="auth-form__input" placeholder="Mật khẩu của bạn" />
                                <span className="form-message" />
                                </div>
                                <div className="auth-form__group">
                                <input id="password_confirmation" name="password_confirmation" type="password" className="auth-form__input" placeholder="Xác nhận mật khẩu" />
                                <span className="form-message" />
                                </div>
                                <div className="auth-form__group">
                                <div className="auth-form__group-items">
                                    <div className="auth-form__group-item">
                                    <label htmlFor="gender" className="auth-form__group-item-label">Giới tính:</label>
                                    </div>
                                    <div className="auth-form__group-item">
                                    <label htmlFor="gender" className="auth-form__group-item-label">Nam</label>
                                    <input name="gender" type="radio" defaultValue="male" className="auth-form__group-item-input" />
                                    </div>
                                    <div className="auth-form__group-item">
                                    <label htmlFor="gender" className="auth-form__group-item-label">Nữ</label>
                                    <input name="gender" type="radio" defaultValue="female" className="auth-form__group-item-input" />
                                    </div>
                                    <div className="auth-form__group-item">
                                    <label htmlFor="gender" className="auth-form__group-item-label">Khác</label>
                                    <input name="gender" type="radio" defaultValue="other" className="auth-form__group-item-input" />
                                    </div>
                                </div>
                                <span className="form-message" />
                                </div>
                                <div className="auth-form__controls">
                                <span className="btn btn-nomal auth-form__controls-back">TRỞ LẠI</span>
                                <button className="btn btn--primary btn-auth-form__controls-login">ĐĂNG KÝ</button>
                                </div>
                            </form>
                            </div>
                            <div className="auth-form__aside">
                            <p className="auth-form__policy-text">
                                Bằng việc đăng ký, bạn đã đồng ý với ChungNN-Shop về
                                <a href className="auth-form__text-link">Điều khoản dịch vụ</a> &amp; 
                                <a href className="auth-form__text-link">Chính sách bảo mật</a>
                            </p>
                            </div>
                            {/* <div class="auth-form__controls">
                                            <button class="btn btn-nomal auth-form__controls-back">TRỞ LẠI</button>
                                            <button class="btn btn--primary btn-auth-form__controls-login">ĐĂNG KÝ</button>
                                        </div> */}
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

export default Register;
