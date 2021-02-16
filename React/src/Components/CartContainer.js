import React from 'react'
class CartContainer extends React.Component {
    render() {
        return (
            <div className="row">

                        {/* COVER START */}
                        <div className="col-4">
                            <img src={this.props.cover} className="img" height="150" />
                        </div>
                        {/* COVER END */}

                        {/* DESCRIPTION ITEM START */}
                        <div className="col-8">
                            <h3>{this.props.judul}</h3>
                            <h4>Harga: Rp {this.props.harga}</h4>

                            {/* BUTTON ADD AND SUBSTRACT START*/}
                            <div className="container">
                            <input type="checkbox" className="btn-check" />
                                <button type="button" className="btn btn-warning" onClick={this.props.substract}>-</button>
                                <label class="btn btn-warning">{this.props.jumlah}</label>
                                <button type="button" className="btn btn-warning" onClick={this.props.add}>+</button>
                            </div>
                            {/* BUTTON ADD AND SUBSTRACT END */}

                            <h4>Total: Rp {this.props.total}</h4>
                        </div>
                        {/* DESCRIPTION ITEM END */}
                        
                        <div>
                            <br></br>
                        </div>
            </div>
        )
    }
}

export default CartContainer;