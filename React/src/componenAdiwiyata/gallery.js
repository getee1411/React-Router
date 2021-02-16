import React, { Component } from 'react'
import MyNav from './mynav'
import MyBox from './box'

class Gallery extends Component {
    render() {
        return (
            <div>
                <div className="row text-center">
                    <MyBox type="col-md-8 mx-auto" css="box-carousel" title="Dokumentasi Adiwiyata">
                        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img class="d-block w-100" src="/galeri/adiwiyata1.jpg" alt="First slide" />
                                </div>
                                <div class="carousel-item">
                                    <img class="d-block w-100" src="/galeri/adiwiyata2.jpg" alt="Second slide" />
                                </div>
                                <div class="carousel-item">
                                    <img class="d-block w-100" src="/galeri/adiwiyata3.jpg" alt="Third slide" />
                                </div>
                            </div>
                            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="sr-only">Previous</span>
                            </a>
                            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="sr-only">Next</span>
                            </a>
                        </div>
                    </MyBox>
                </div>

                <div className="row">
                    <MyBox type="col-md-3 mx-auto" css="box-foto">
                        <img src="/galeri/adiwiyata4.jpeg" alt="Third slide"/>
                    </MyBox>
                    <MyBox type="col-md-3 mx-auto" css="box-foto">
                        <img src="/galeri/adiwiyata5.jpg" alt="Third slide"/>
                    </MyBox>
                    <MyBox type="col-md-3 mx-auto" css="box-foto">
                        <img src="/galeri/adiwiyata6.jpg" alt="Third slide"/>
                    </MyBox>
                    <MyBox type="col-md-3 mx-auto" css="box-foto">
                        <img src="/galeri/adiwiyata7.JPG" alt="Third slide"/>
                        <br/>
                        <br/>
                    </MyBox>
                </div>
            </div>
        )
    }
}

export default Gallery
