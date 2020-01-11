import React, { Component } from 'react'

export default class Cards extends Component {
    render() {
        return (
            <div className="card">
                <a >
                 {this.props.name} <br/>
                </a>
            </div>
        )
    }
}
