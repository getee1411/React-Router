import React, { Component } from 'react'

class MyList extends Component {
    render() {
        return (
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">{this.props.barang}</h5>
                        <p class="card-text">Harga   {this.props.harga}</p>
                        <p class="card-text">Jumlah  {this.props.jumlah}</p>
                        <p class="card-text">Total   {this.props.total}</p>
                    </div>
                    <div class="card-footer text-center">
                        {this.props.children}
                    </div>
                </div>
        )
    }
}

export default MyList