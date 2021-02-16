import React, { Component } from 'react'
import MyList from './list'

class Belanja extends Component{
    bind = (event) => {
        this.setState({[event.target.name]:event.target.value})
    }

    // hitung = (event) => {
    //     var jabrang = this.state.belanja
    //     if (jabrang === null || jabrang.length === 0) return 0

    //     const hargaBarang = jabrang.reduce((total, jabrang) => {
    //         return total + jabrang.harga * jabrang.jumlah
    //     }, 0)

    //     this.setState({total: hargaBarang})
    // }

    saveBelanja = (event) => {
        event.preventDefault()
        let temp = this.state.belanja

        let harga = this.state.harga
        let jumlah = this.state.jumlah
        let total = harga*jumlah

        if (this.state.action==="insert") {

            temp.push({
                id: this.state.id,
                barang: this.state.barang,
                harga: this.state.harga,
                jumlah: this.state.jumlah,
                total:total
            })
        }else if (this.state.action==="update") {
            let index = temp.findIndex(item=>item.id === this.state.id)

            temp[index].barang = this.state.barang
            temp[index].harga = this.state.harga
            temp[index].jumlah = this.state.jumlah
            temp[index].total = total
        }
        this.setState({belanja:temp})
    }

    Add = () => {
        this.setState({
            id:"",
            barang: "",
            harga: "",
            jumlah: "",
            action:"insert"
        })
    }

    Edit = (item) => {
        this.setState({
            id:item.id,
            barang: item.barang,
            harga: item.harga,
            jumlah: item.jumlah,
            action:"update"
        })
    }

    Drop = (index) => {
        let temp = this.state.belanja;  
        temp.splice(index,1);  
        this.setState({belanja: temp}); 
    }



    constructor(){
        super()
        this.state={
            belanja: [
                {id:"1", barang: "sikat gigi", harga: "10000",jumlah: "1", total:"10000"},
                {id:"1", barang: "sabun cuci", harga: "5000",jumlah: "1", total:"5000"},
            ],
            id: "",
            barang: "",
            harga:"",
            jumlah:"",
            total:"",
            action:""
        }
    }

    render(){
        return(
            <div>
                    {this.state.belanja.map((item,index)=>{
                        return(
                            <li className="list-group" key={index}>
                                <MyList barang={item.barang} harga={item.harga} jumlah={item.jumlah} total={item.total}>
                                    <button className="btn btn-sm btn-primary m-1" onClick={() => this.Edit(item)}data-toggle="modal" data-target="#modal">
                                        Edit
                                    </button>
                                    <button className="btn btn-sm btn-danger m-1" onClick={() => this.Drop(index)}>
                                        Hapus
                                    </button>
                                </MyList>
                            </li>
                        )
                    })}
                    <button className="btn btn-sm btn-success m-3" onClick={this.Add}data-toggle="modal" data-target="#modal">
                            Tambah Data
                    </button>

                
                {/* MODAL NIH */}
                <div className="modal fade" id="modal">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header bg-success text-white">
                                <h5>Form Agenda</h5>
                            </div>
                            <form onSubmit={this.saveBelanja}>
                                <div className="modal-body">
                                    id
                                    <input type="text" name="id" className="form-control" onChange={this.bind} value={this.state.id} disabled/>
                                    barang
                                    <input type="text" name="barang" className="form-control" onChange={this.bind} value={this.state.barang}/>
                                    harga
                                    <input type="text" name="harga" className="form-control" onChange={this.bind} value={this.state.harga}/>
                                    jumlah
                                    <input type="text" name="jumlah" className="form-control" onChange={this.bind} value={this.state.jumlah}/>
                                </div>
                                <div className="modal-footer">
                                    <button type="submit" className="btn btn-primary">
                                        Simpan
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>


            </div>
        )
    }
}

export default Belanja