import React, { Component } from 'react'
import { Link } from "react-router-dom";
import '../style/Header.css';

export default class Hade extends Component {
    constructor(props) {
        super(props)
        this.state = {
            topbar: [
                { url: '/', name: '首页' },
                { url: 'technology', name: '技术笔记' },
                { url: 'download', name: '资源下载' },
                { url: 'life', name: '生活笔记' },
                { url: 'about', name: '关于我' },
                { url: 'message', name: '给我留言' },
            ],
        }
    }

    render() {
        return (
            <div className="header">
                <div className="site-header container clearfix">
                    {/* <div className="f-l"><Link to="/logo" className="logo">MI</Link></div> */}
                    <ul className="f-l">
                        {this.state.topbar.map((item, index) => {
                            return <li key={index}><Link to={item.url}>{item.name}</Link></li>
                        })}
                    </ul>
                    <ul className="f-r">
                        <li>登录</li>
                        <li>注册</li>
                    </ul>
                    {/* <form className="search-form f-r"><input type="text" className="search"/><input type="submit" className="search-btn"/></form> */}
                </div>
            </div>
        )
    }
}