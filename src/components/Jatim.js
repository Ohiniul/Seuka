import React from "react";
import tari from '../asset/tari/reog.jpg';
import logo from '../asset/logo/jatim.jpg';
import gedung from '../asset/gedung/singosari.jpg';
import makanan from '../asset/makan/rawon.jpg';


const Jatim = () => {
    return (
        <section id="jatim" className="py-20 bg-black">
            <div className="container mx-auto text-center">
                <h2 className="text-2xl font-bold mb-[3rem] text-white">Jawa Timur</h2>

                <div className="grid grid-cols-1 lg:grid-cols-1 ">
                        <img src={logo} alt="Raul" className="w-80 h-85 object-cover mb-8 rounded flex justify-self-center"/>
                        <h3 className="text-2xl font-bold pb-5 text-white mt-2">Jawa Timur adalah sebuah wilayah provinsi yang terletak di bagian timur Pulau Jawa, Indonesia. 
                            Ibu kotanya adalah Kota Surabaya. Jawa Timur memiliki wilayah terluas di antara enam provinsi di pulau Jawa, dan memiliki jumlah penduduk 
                            terbanyak kedua di Indonesia setelah Jawa Barat. Wilayah Provinsi Jawa Timur berbatasan dengan Laut Jawa di sebelah utara, Selat Bali 
                            (Provinsi Bali) di sebelah timur, Samudra Hindia di sebelah selatan, serta Provinsi Jawa Tengah di sebelah barat. Wilayah Provinsi 
                            Jawa Timur juga meliputi Pulau Madura, Pulau Bawean, Pulau Kangean, Kepulauan Kangean serta sejumlah pulau-pulau kecil di Laut Jawa 
                            yakni: Kepulauan Masalembu, Pulau Sempu dan Nusa Barung.</h3>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-gray-100 hover:bg-gray-300 p-4 rounded mt-20">
                        <img src={tari} alt="Raul" className="w-full h-80 object-cover mb-4 rounded"/>
                        <h3 className="text-2xl font-bold pb-5">Reog Ponorogo</h3>
                        <p className="text-slate-700 text-lg mt-3">Reog Ponorogo merupakan tarian tradisional dari Ponorogo, Jawa Timur dalam arena terbuka yang berfungsi 
                            sebagai hiburan rakyat, mengandung unsur magis, penari utama adalah orang berkepala singa dengan hiasan bulu merak, dengan berat 
                            topeng mencapai 50 – 60 kg. Ditambah beberapa penari bertopeng dan berkuda lumping dan Reog asli dari Indonesia.</p>
                    </div>
                    <div className="bg-gray-100 hover:bg-gray-300 p-4 rounded mt-20">
                        <img src={gedung} alt="Raul" className="w-full h-80 object-cover mb-4 rounded"/>
                        <h3 className="text-2xl font-bold pb-5">Candi Singasari</h3>
                        <p className="text-slate-700 text-lg mt-3">Candi Singosari atau Candi Singasari merupakan candi Hindu-Buddha peninggalan bersejarah 
                            dari Kerajaan Singasari yang berlokasi di Kelurahan Candirenggo, Kecamatan Singosari, Kabupaten Malang, Jawa Timur, Indonesia, 
                            sekitar 10 km dari Kota Malang. Candi ini merupakan tempat pendharmaan bagi raja Singhasari terakhir, yaitu Kertanegara, yang 
                            meninggal pada tahun 1292 M. Candi ini berada di lembah di antara Pegunungan Tengger dan Gunung Arjuno pada ketinggian 512m di atas permukaan laut. 
                            </p>
                    </div>
                    <div className="bg-gray-100 hover:bg-gray-300 p-4 rounded mt-20">
                        <img src={makanan} alt="Raul" className="w-full h-80 object-cover mb-4 rounded"/>
                        <h3 className="text-2xl font-bold pb-5">Rawon</h3>
                        <p className="text-slate-700 text-lg mt-3">Rawon adalah masakan khas Indonesia yang berasal dari Ponorogo, Jawa Timur, yang berupa sup daging berkuah hitam 
                            dengan campuran bumbu khas yang menggunakan kluwek. Makanan ini telah berusia lebih dari 1.000 tahun. Rawon dari Ponorogo menyebar ke penjuru Jawa 
                            Timur dan dikenal sebagai masakan khas Jawa Timur.</p>
                    </div>
            </div>
        </section>
    )
}

export default Jatim;