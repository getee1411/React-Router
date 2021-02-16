import React, {Component} from "react";
import Card from './Card';  
import $ from "jquery";

class Gallery extends Component {  
	constructor(){
        super()
        this.state = {
            buku: [
                {
                    isbn:"12345", judul:"Bulan", penulis:"Tere Liye",
                    penerbit:"CV Harapan Kita", harga: 90000,
                    cover:"https://drive.google.com/uc?id=1ui-jyKgu3DqFyo7VKJu-FFXkaNQN3aSg"
                },
                {
                    isbn:"12346", judul:"Anak Badai", penulis:"Tere Liye",
                    penerbit:"CV Nusa Bangsa", harga: 80000,
                    cover:"https://drive.google.com/uc?id=1rJDcCOmsd14NL6DG3Wps_kewZomGcLU-"
                },
                {
                    isbn:"54321", judul:"Bumi", penulis:"Tere Liye",
                    penerbit:"CV Nusa Bangsa", harga: 70000,
                    cover:"https://drive.google.com/uc?id=1e-thvq7lkG1_gw0FqHzRoiAhfhdgpOUj"
                },
            ],

            action: "",
            isbn: "",
            judul: "",
            penulis: "",
            penerbit: "",
            harga: 0,
            cover: "",
            user:"",
            selectedItem: null,
        }
        this.state.filterBuku = this.state.buku
    }
	render(){
        return(
            <div className="container">
                <br />
                <br />
                <br />
                <br />
                <br />
                <h4 className="text-info my-2">
                    Nama Pengguna: { this.state.user }
                </h4>

                <input type="text" className="form-control my-2" placeholder="Pencarian"
                    value={this.state.keyword}
                    onChange={ev => this.setState({keyword: ev.target.value})}
                    onKeyUp={ev => this.searching(ev)}
                 />

                <div className="row">
                { this.state.filterBuku.map( (item, index) => (
                        <Card
                        judul={item.judul}
                        penulis={item.penulis}
                        penerbit={item.penerbit}
                        harga={item.harga}
                        cover={item.cover}
                        onEdit={ () => this.Edit(item)}
                        onDrop={ () => this.Drop(item)}
                        onCart={ () => this.addToCart(item)}
                         />
                    )) }

                </div>

                <button className="btn btn-success" onClick={() => this.Add()}>
                    Tambah Data
                </button>

                {/* component modal sbg control manipulasi data */}
                <div className="modal" id="modal_buku">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            {/* modal header */}
                            <div className="modal-header">
                                Form Buku
                            </div>

                            {/* modal body */}
                            <div className="modal-body">
                                <form onSubmit={ev => this.Save(ev)}>
                                    Judul Buku
                                    <input type="text" className="form-control mb-2"
                                    value={this.state.judul}
                                    onChange={ ev => this.setState({judul: ev.target.value}) }
                                    required />
                                    
                                    Penulis Buku
                                    <input type="text" className="form-control mb-2"
                                    value={this.state.penulis}
                                    onChange={ ev => this.setState({penulis: ev.target.value}) }
                                    required />
                                    
                                    Penerbit Buku
                                    <input type="text" className="form-control mb-2"
                                    value={this.state.penerbit}
                                    onChange={ ev => this.setState({penerbit: ev.target.value}) }
                                    required />
                                    
                                    Harga Buku
                                    <input type="number" className="form-control mb-2"
                                    value={this.state.harga}
                                    onChange={ ev => this.setState({harga: ev.target.value}) }
                                    required />
                                    
                                    Cover Buku
                                    <input type="url" className="form-control mb-2"
                                    value={this.state.cover}
                                    onChange={ ev => this.setState({cover: ev.target.value}) }
                                    required />
                                    
                                    <button className="btn btn-info btn-block" type="submit">
                                        Simpan
                                    </button>                                    

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    
    //add
    Add = () => {
        window.$("#modal_buku").modal("show")
        this.setState({
            isbn: Math.random(1, 10000000),
            judul: "",
            penulis: "",
            penerbit: "",
            cover: "",
            harga: 0,
            action: "insert"
        })
    }

    //edit
    Edit = (item) => {
        $("#modal_buku").modal("show")
        this.setState({
            isbn: item.isbn,
            judul: item.judul,
            penulis: item.penulis,
            penerbit: item.penerbit,
            cover: item.cover,
            harga: item.harga,
            action: "update",
            selectedItem: item
        })
    }

    //save
    Save = (event) => {
        event.preventDefault()

        let tempBuku = this.state.buku

        if (this.state.action === "insert") {
            tempBuku.push({
                isbn: this.state.isbn,
                judul: this.state.judul,
                penulis: this.state.penulis,
                penerbit: this.state.penerbit,
                cover: this.state.cover,
                harga: this.state.harga,
            })
        } else if (this.state.action === "update") {
            let index = tempBuku.indexOf(this.state.selectedItem)
            tempBuku[index].isbn = this.state.isbn
            tempBuku[index].judul = this.state.judul
            tempBuku[index].penulis = this.state.penulis
            tempBuku[index].penerbit = this.state.penerbit
            tempBuku[index].cover = this.state.cover
            tempBuku[index].harga = this.state.harga
        }

        this.setState({ buku: tempBuku })

        $("#modal_buku").modal("hide")
    }

    //delete
    Drop = (item) => {
        if (window.confirm("Delete this file?")) {
            let tempBuku = this.state.buku
            let index = tempBuku.indexOf(item)
            tempBuku.splice(index, 1)
            this.setState({ buku: tempBuku })
        }
    }

    //search
    searching = event => {
        if (event.keyCode === 13) {
            // 13 adalah kode tombol enter

            let keyword = this.state.keyword.toLocaleLowerCase()
            let tempBuku = this.state.buku
            let result = tempBuku.filter(item => {
                return item.judul.toLocaleLowerCase().includes(keyword) ||
                    item.penulis.toLocaleLowerCase().includes(keyword) ||
                    item.penerbit.toLocaleLowerCase().includes(keyword)
            })
            this.setState({ filterBuku: result })
        }
    }

    //setUser
    setUser = () => {
        if (sessionStorage.getItem("user") === null) {
            let prompt = window.prompt("Insert your Name", "")
            if (prompt === null || prompt === "") {
                this.setUser()
            } else {
                //menambah user ke session storage
                sessionStorage.setItem("user", prompt)
                //menambah data user ke state
                this.setState({ user: prompt })
            }
        } else {
            //mengakses data user jika sudah didalam session storage
            let name = sessionStorage.getItem("user")
            this.setState({ user: name })
        }
    }

    //memanggil user
    componentDidMount() {
        this.setUser()
    }

    //tambah keranjang
    addToCart = (selectedItem) => {
        let tempCart = []

        if (localStorage.getItem("cart") !== null) {
            tempCart = JSON.parse(localStorage.getItem("cart"))
        }

        let existItem = tempCart.find(item => item.isbn === selectedItem.isbn)

        if (existItem) {
            window.alert("You already add this product on your cart")
        } else {
            let promptJumlah = window.prompt("Quantity", "")
            if (promptJumlah !== null && promptJumlah !== "") {
                selectedItem.jumlahBeli = promptJumlah
                tempCart.push(selectedItem)

                localStorage.setItem("cart", JSON.stringify(tempCart))
            }
        }
    }
}  

export default Gallery;  