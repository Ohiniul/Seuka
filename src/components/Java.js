import React from "react";
import tari from '../asset/tari/tari cokek.jpg';
import logo from '../asset/logo/banten.jpg';
import gedung from '../asset/java/masjid banten.jpg';
import makanan from '../asset/makan/rabeg.jpg';


const Banten = () => {
    return (
        <section id="banten" className="py-20 bg-black">
            <div className="container mx-auto text-center">
                <h2 className="text-2xl font-bold mb-[3rem] text-white">Banten</h2>

                <div className="grid grid-cols-1 lg:grid-cols-1 ">
                        <img src={logo} alt="Raul" className="w-80 h-85 object-cover mb-8 rounded flex justify-self-center"/>
                        <h3 className="text-2xl font-bold pb-5 text-white mt-2">Banten adalah sebuah provinsi yang terletak pada bagian barat Pulau Jawa, Indonesia. 
                            Provinsi ini beribu kota di Kota Serang. Sebelum terjadi pemekaran daerah, provinsi ini sebelumnya pernah menjadi bagian dari wilayah Jawa 
                            Barat yang kemudian resmi dimekarkan pada tanggal 4 Oktober 2000. Pada pertengahan tahun 2024, jumlah penduduk provinsi Banten sebanyak 12.628.199 jiwa.</h3>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-gray-100 hover:bg-gray-300 p-4 rounded mt-20">
                        <img src={tari} alt="Raul" className="w-full h-80 object-cover mb-4 rounded"/>
                        <h3 className="text-2xl font-bold pb-5">Tari Cokek</h3>
                        <p className="text-slate-700 text-lg mt-3">Tari Cokek adalah Tarian yang berasal dari budaya masyarakat Betawi dan Tionghoa yang tinggal di Banten. 
                            Tari Cokek biasanya ditampilkan dalam acara-acara seperti pernikahan atau pesta adat. Tarian ini menggambarkan keceriaan dan interaksi antara penari 
                            dan penonton, dan biasanya diiringi oleh musik gambang kromong.</p>
                    </div>
                    <div className="bg-gray-100 hover:bg-gray-300 p-4 rounded mt-20">
                        <img src={gedung} alt="Raul" className="w-full h-80 object-cover mb-4 rounded"/>
                        <h3 className="text-2xl font-bold pb-5">Masjid Agung Banten</h3>
                        <p className="text-slate-700 text-lg mt-3">Masjid Angung Banten dalah salah satu masjid tertua di Indonesia yang penuh dengan nilai sejarah. Masjid ini terletak di Banten Lama, 
                            Kelurahan Banten, Kecamatan Kasemen, Kota Serang, Provinsi Banten, Indonesia. Masjid ini adalah salah satu dari sedikit peninggalan yang tersisa dari bekas 
                            Kota Kuno Banten—pusat perdagangan paling makmur di Indonesia—setelah jatuhnya Kesultanan Demak pada pertengahan abad ke-16.</p>
                    </div>
                    <div className="bg-gray-100 hover:bg-gray-300 p-4 rounded mt-20">
                        <img src={makanan} alt="Raul" className="w-full h-80 object-cover mb-4 rounded"/>
                        <h3 className="text-2xl font-bold pb-5">Rabeg</h3>
                        <p className="text-slate-700 text-lg mt-3">Rabeg adalah masakan tradisional yang berasal dari perpaduan bumbu khas Jazirah Arab dan Banten, yang terbuat dari daging kambing 
                            yang memakai bumbu sederhana. Rasanya gurih dan tidak terlalu berbahaya untuk yang menderita kolesterol karena makanan khas Jawa Serang ini tidak memakai santan dalam proses 
                            pengolahannya. Masakan yang identik dengan bahan utama daging kambing ini menjadi kuliner yang banyak dan mudah ditemukan. Bahkan sering dijumpai pada acara tertentu, seperti 
                            pernikahan atau khitanan. Daging yang biasa digunakan untuk mengolah Rabeg ini adalah daging kambing. Menurut sejarah, Rabeg adalah masakan yang digemari oleh Sultan Maulana, 
                            Kesultanan Banten.</p>
                    </div>
            </div>
        </section>
    )
}

export default Banten;