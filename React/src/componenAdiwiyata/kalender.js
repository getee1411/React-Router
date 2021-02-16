import React, { Component } from 'react'
import MyNav from './mynav'
import MyBox from './box'
import MyCard from './card'

class Kalender extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <MyBox type="col-md-6 mx-auto" >
                    <br />
                        <h3 className="text-center">
                            HARI BUMI
                        </h3>
                    </MyBox>
                </div>
                <div className="row">
                    <MyBox type="col-md-11 mx-auto">
                        <div class="card-deck">
                            <MyCard src="/card/laut.jpg" title="15 JANUARI" href="https://www.greeners.co/agenda-hari-lingkungan-hidup-januari/hari-dharma-samudera/#:~:text=Hari%20Dharma%20Samudera%20diperingati%20setiap,peristiwa%20heroik%20di%20Laut%20Aru.">
                                Hari Peringatan Laut dan Samudera nasional
                            </MyCard>
                            <MyCard src="/card/basah.jpg" title="2 FEBRUARI" href="https://id.wikipedia.org/wiki/Hari_Lahan_Basah_Sedunia">
                                Hari Lahan Basah Sedunia
                            </MyCard>
                            <MyCard src="/card/trash.jpg" title="21 FEBRUARI" href="https://www.greeners.co/agenda-hari-lingkungan-hidup-februari/hari-peduli-sampah-nasional/">
                                Hari Peduli Sampah Nasional
                            </MyCard>
                            <MyCard src="/card/hutan.jpg" title="21 MARET" href="https://id.wikipedia.org/wiki/Hari_Hutan_Sedunia">
                                Hari Hutan Sedunia
                            </MyCard>
                            <MyCard src="/card/air.jpg" title="22 MARET" href="https://id.wikipedia.org/wiki/Hari_Air_Sedunia">
                                Hari Air Sedunia
                            </MyCard>
                        </div>
                    </MyBox>
                </div>
                <br />
                <div className="row">
                    <MyBox type="col-md-11 mx-auto">
                        <div class="card-deck">
                            <MyCard src="/card/meteor.jpg" title="23 MARET" href="https://news.detik.com/berita/d-4950039/tentang-hari-meteorologi-sedunia-yang-diperingati-tiap-23-maret">
                                Hari Meteorologi Sedunia
                            </MyCard>
                            <MyCard src="/card/bumi.jpg" title="22 APRIL" href="https://id.wikipedia.org/wiki/Hari_Bumi">
                                Hari Bumi
                            </MyCard>
                            <MyCard src="/card/burung.jpg" title="3 MEI" href="https://rimbakita.com/hari-migrasi-burung-sedunia/#:~:text=Setiap%20tanggal%2010%20Mei%2C%20diperingati,atau%20World%20Migratory%20Bird%20Day.">
                                Hari Burung Migratori Internasional
                            </MyCard>
                            <MyCard src="/card/sun.jpg" title="3 MEI" href="https://www.kompasiana.com/johanisalbertmalingkaspacaran/55484f4f547b61e50d2523f3/hari-surya">
                                Hari Surya
                            </MyCard>
                            <MyCard src="/card/bio.jpg" title="22 MEI" href="https://www.ekuatorial.com/id/tag/hari-biodiversitas-dunia/#:~:text=Tag%3A%20Hari%20Biodiversitas%20Dunia&text=Hari%20Biodiversitas%20Dunia%20(World%20Biodivesity,2%20PBB%20tahun%202000%20silam.">
                                Hari Biodiversitas Dunia
                            </MyCard>
                        </div>
                    </MyBox>
                </div>
                <br />
                <div className="row">
                    <MyBox type="col-md-11 mx-auto">
                        <div class="card-deck">
                            <MyCard src="/card/bakau.jpg" title="31 MEI" href="https://www.who.int/indonesia/news/detail/30-05-2020-pernyataan-hari-tanpa-tembakau-sedunia-2020">
                                Hari Anti Tembakau Internasional
                            </MyCard>
                            <MyCard src="/card/lingkungan.jpg" title="5 JUNI" href="https://id.wikipedia.org/wiki/Hari_Lingkungan_Hidup_Sedunia_PBB">
                                Hari Lingkungan Hidup Sedunia PBB
                            </MyCard>
                            <MyCard src="/card/kering.jpg" title="17 JUNI" href="http://green.ui.ac.id/the-world-day-to-combat-desertification/#:~:text=The%20World%20Day%20to%20Combat%20Desertification%20atau%20Hari%20Dunia%20untuk,Bangsa%20setiap%20tanggal%2017%20Juni.">
                                Hari Melawan Desertifikasi dan Kekeringan Dunia PBB
                            </MyCard>
                            <MyCard src="/card/populasi.jpg" title="11 JULI" href="https://id.wikipedia.org/wiki/Hari_Populasi_Dunia_PBB">
                                Hari Populasi Dunia PBB
                            </MyCard>
                            <MyCard src="/card/ozon.jpg" title="16 SEPTEMBER" href="https://id.wikipedia.org/wiki/Hari_Perlindungan_Lapisan_Ozon_Sedunia">
                                Hari Perlindungan Lapisan Ozon Sedunia
                            </MyCard>
                        </div>
                    </MyBox>
                </div>
                <br />
                <div className="row">
                    <MyBox type="col-md-11 mx-auto">
                        <div class="card-deck">
                            <MyCard src="/card/emisi.jpg" title="20 SEPTEMBER" href="">
                                Hari Emisi Nol (Zero Emissions Day)
                            </MyCard>
                            <MyCard src="/card/car.jpg" title="22 SEPTEMBER" href="https://id.wikipedia.org/wiki/Hari_Bebas_Mobil">
                                Hari Bebas Mobil (Car Free Day)
                            </MyCard>
                            <MyCard src="/card/bencana.jpg" title="13 OKTOBER" href="https://id.wikipedia.org/wiki/Hari_Pengurangan_Bencana_Alam_Internasional">
                                Hari Pengurangan Bencana Alam Internasional
                            </MyCard>
                            <MyCard src="/card/pohon.jpg" title="21 NOVEMBER" href="">
                                Hari Pohon
                            </MyCard>
                            <MyCard src="/card/gunung.jpg" title="11 DESEMBER" href="">
                                Hari Gunung Sedunia
                            </MyCard>
                        </div>
                    </MyBox>
                </div>
            </div>

        )
    }
}

export default Kalender