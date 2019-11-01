import React, { Component } from 'react';
import Header from '../Components/Header'
import Swiper from '../Components/Swiper'
import List from '../Components/List'

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = { }
    }
    render() {
        return (
            <div>
                <Header />
                <Swiper />
                <List />
            </div>
        );
    }
}

export default Index;

