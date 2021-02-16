import React, { Component } from 'react'

class MyAgenda extends Component {
    render() {
        return (
                <div class="card">
                    <div class="card-body">
                        {this.props.cover}
                        <h5 class="card-title text-center">{this.props.title}</h5>
                        <p class="card-text text-center">{this.props.agenda}</p>
                    </div>
                    <div class="card-footer text-center">
                        {this.props.children}
                    </div>
                </div>
        )
    }
}

export default MyAgenda