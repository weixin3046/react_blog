import React, { Component } from 'react'
import '../style/Swiper.css'

export default class Swiper extends Component {
    constructor(props) {
        super(props);
        this.state = { }
    }
    render() {
        return (
            <div className="swiper">
                <div >柳絮随风各西东,人事无非已不同。</div>
            </div>
        );
    }
}