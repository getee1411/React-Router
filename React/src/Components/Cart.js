import { extend } from 'jquery'
import React from 'react'
import CartContainer from './CartContainer'

class Cart extends React.Component {
    constructor() {
        super()
        this.state = {
            cart: [],
            user: "",
            total: 0,
            selectedItem: null
        }
    }

    //cart
    initCart = () => {

        let tempCart = []
        if (localStorage.getItem("cart") !== null) {
            tempCart = JSON.parse(localStorage.getItem("cart"))
        }

        let userName = sessionStorage.getItem("user")

        let totalHarga = 0
        tempCart.map(item => {
            totalHarga += (item.harga * item.jumlahBeli)
        })

        this.setState({
            cart: tempCart,
            user: userName,
            total: totalHarga
        })
    }

    componentDidMount() {
        this.initCart()
    }


    //add
    Add = (item) => {
        let tempCart = this.state.cart
        let index = tempCart.indexOf(item)

        tempCart[index].jumlahBeli = parseInt(item.jumlahBeli) + 1

        this.setState({ cart: tempCart })

        let stringcart = JSON.stringify(this.state.cart)

        localStorage.setItem("cart", stringcart)
    }

    //total
    Substract = (item) => {
        let tempCart = this.state.cart
        let index = tempCart.indexOf(item)

        if (item.jumlahBeli <= 1) {
            if (window.confirm("are you sure?")) {
                tempCart.splice(index, 1)
                this.setState({ cart: tempCart })
            } else {
                this.setState({ cart: tempCart })
            }
        } else {
            tempCart[index].jumlahBeli = parseInt(item.jumlahBeli) - 1
            this.setState({ cart: tempCart })
        }


        let stringcart = JSON.stringify(this.state.cart)
        localStorage.setItem("cart", stringcart)
    }
    render() {
        return (
            <div className="container">
                <br />
                <br />
                <br />
                <br />
                <br />
                    Your Cart, {this.state.user}
                <br></br>
                <div className="container">

                    <div className="container">
                        {this.state.cart.map((item, index) => (
                            <CartContainer
                                cover={item.cover}
                                judul={item.judul}
                                harga={item.harga}
                                jumlah={item.jumlahBeli}
                                add={() => this.Add(item)}
                                substract={() => this.Substract(item)}
                                total={item.harga * item.jumlahBeli}
                            />
                        ))}
                    </div>
                    <br></br>

                </div>

                <div className="container bill  rounded ">
                    <div className="row align-items-center mx-auto">
                        <h3 className="fw-bold text-center">
                            TOTAL HARGA   Rp {this.state.total}
                        </h3>
                    </div>
                </div>
            </div>
        )
    }

}

export default Cart;