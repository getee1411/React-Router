import React, { Component } from 'react'

class MyBox extends Component {
    render() {
        return (
            <div className={this.props.type}>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <div className={this.props.css}>
                    <h2 className="text-center">{this.props.title}</h2>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default MyBox