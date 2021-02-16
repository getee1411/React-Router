import React, { Component } from 'react'

class MyCard extends Component {
    render() {
        return (
                <div class="card">
                    <img class="card-img-top" src={this.props.src} alt="Card image cap" />
                    <div class="card-body">
                        <h5 class="card-title text-center">{this.props.title}</h5>
                        <p class="card-text text-center">{this.props.children}</p>
                    </div>
                    <div class="card-footer text-center">
                        <a href={this.props.href} class="btn btn-primary">Lebih Lanjut</a>
                    </div>
                </div>
        )
    }
}

export default MyCard