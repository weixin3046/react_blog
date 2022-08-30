import React, { Component } from 'react';
import Header from '../Components/Header'
import Sidebar from '../Components/Sidebar'
import '../style/Index.css';

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = { }
    }
    render() {
        return (
            <div>
                <div>
                    <Sidebar />
                </div>
                <div className="body_wrap">
                    <Header />
                    <div></div>
                </div>
                
                
                {/* <Swiper /> */}
                {/* <List /> */}
                {/* <Footer /> */}
            </div>
        );
    }
}

export default Index;

