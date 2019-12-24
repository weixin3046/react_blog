import React, { Component } from 'react'
import '../style/Footer.css'

export default class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = { }
    }
    render() {
        return (
            <div className="footer">
                <p>申明：本站文字除标明出处外皆为作者原创，转载请注明原文链接。</p>
                <p>Copyright © 2019 achasing.cn. All Rights Reserved.京ICP备19052037号-1</p> 
            </div>
        );
    }
}