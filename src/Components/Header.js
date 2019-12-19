import React, { Component } from 'react'
import { Link } from "react-router-dom";
import '../style/Header.css';
import Pic from '../assets/avatar.jpeg';

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
            user: {
                name: 'chasing',
            }
        }
    }

    render() {
        return (
            <div className="header">
                <div className="header_top">
                    <div className="avatar">
                        <img className="picture" src={Pic} alt="这是头像"/>
                        <p className="username">{this.state.user.name}</p>
                    </div>
                </div>
                <div className="site_nav">
                    <ul className="clearfix navbar_tab">
                        {this.state.topbar.map((item, index) => {
                            return <li key={index}><Link to={item.url}>{item.name}</Link></li>
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}