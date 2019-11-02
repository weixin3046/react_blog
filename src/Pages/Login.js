import React, { Component } from 'react'
import '../style/login.css'

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <div className="personal-container">
                    <div className="personal-page">
                        <div className="page-wrap">
                            <div className="page-top">
                                <a href="#" className="f-l to-login r-l">登录</a>
                                <span className="f-l point">·</span>
                                <a href="#" className="f-l to-register  r-l">注册</a>
                            </div>
                            <div className="page-content">
                                <form className="login-form">
                                    <div>
                                        <div className="username-box userdiv">
                                            <i className="iconfont">1</i> 
                                            <input type="text" name="username" className="username userinput" placeholder="手机号或邮箱" />
                                        </div>
                                        <div className="password-box userdiv">
                                            <i className="iconfont">2</i>
                                            <input type="password" name="password" className="password userinput" placeholder="密码" />
                                        </div>                                      
                                    </div>
                                    <div className="login-other clearfix">
                                        <input type="checkbox" name="remberme" className="remberme" />
                                        <span>记住我</span>
                                        <a href="#" className="login-problem">登录遇到问题？</a>
                                    </div>                                   
                                    <input className="submit" type="submit" value="登录" />
                                    <div className="social-account-login">
                                        <h6>社交账号登录</h6>
                                    </div>
                                    <ul className="login-methods">
                                        <li className="login-methods-one">
                                            <a href="3"><i className="iconfont">微</i></a>
                                        </li>
                                        <li>
                                            <a href="3"><i className="iconfont">博</i></a>
                                        </li>
                                        <li>
                                            <a href="3"><i className="iconfont">Q</i></a>
                                        </li>
                                        <li>
                                            <a href="3">其他</a>
                                        </li>
                                    </ul>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}