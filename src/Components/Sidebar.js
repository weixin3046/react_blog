import React, { Component } from 'react'
import '../style/Sidebar.css'

export default class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            num: 89,
            list: ["1.作者简介", "2. 前言", "3. 梦想", "4. 现实"]
        }
    }
    render() {
        return (
            <div className="sidebar">
                <div>
                    <h3 className="title">目录</h3>
                    <div className="tip">
                        <span>你已经读了</span>
                        <span>{this.state.num}</span>
                        <span>%</span>
                        <div className="tip_line"></div>
                    </div>
                    <ul className="sidebar_list">
                        {this.state.list.map((item, index) => {
                            return <li className="list_item" key={index}>{item}</li>
                        })}
                    </ul>
                </div>
            </div>
        );
    }
}