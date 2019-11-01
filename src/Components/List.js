import React, { Component } from 'react'
import axios from 'axios';

export default class List extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    componentDidMount() {
        axios.get('http://localhost:8000/list', {
            params: {
                pageindex: 1,
                pagesize: 10,
                tab: 'js'//分类
                }
            }
        )
            .then(function (response) {
            console.log(response);
            })
    }
    render() {
        return (
            <div>
                <div>
                </div>
            </div>
        )
    }
}