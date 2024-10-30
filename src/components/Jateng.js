import React from "react";
import tari from '../asset/tari/Tari-Gambyong.jpg';
import logo from '../asset/logo/jateng.jpg';
import gedung from '../asset/gedung/Lawang Sewu.jpg';
import makanan from '../asset/makan/Tahu gimbal.jpg';


const Jateng = () => {
    return (
        <section id="jateng" className="py-20 bg-black">
            <div className="container mx-auto text-center">
                <h2 className="text-2xl font-bold mb-[3rem] text-white">Jawa Tengah</h2>

                <div className="grid grid-cols-1 lg:grid-cols-1 ">
                        <img src={logo} alt="Raul" className="w-80 h-85 object-cover mb-8 rounded flex justify-self-center"/>
                        <h3 className="text-2xl font-bold pb-5 text-white mt-2">Jawa Tengah merupakan Sebuah wilayah provinsi di Indonesia yang terletak di bagian tengah Pulau Jawa.
                            Provinsi ini berbatasan dengan Provinsi Jawa Barat di sebelah barat, Samudra 
                            Hindia beserta Daerah Istimewa Yogyakarta di sebelah selatan, Provinsi Jawa Timur di sebelah timur dan Laut Jawa di sebelah utara. 
                            Luas total wilayahnya 32.800,69 km², atau sekitar 28,94% dari luas pulau Jawa. Provinsi Jawa Tengah juga meliputi Pulau Nusakambangan 
                            di sebelah selatan (dekat dengan perbatasan Jawa Barat), serta Kepulauan Karimun Jawa di Laut Jawa.</h3>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-gray-100 hover:bg-gray-300 p-4 rounded mt-20">
                        <img src={tari} alt="Raul" className="w-full h-80 object-cover mb-4 rounded"/>
                        <h3 className="text-2xl font-bold pb-5">Tari Gambyong</h3>
                        <p className="text-slate-700 text-lg mt-3">Tari Gambyong adalah salah satu tarian klasik Jawa Tengah yang berasal 
                            dari daerah Surakarta. Tarian ini awalnya merupakan tarian rakyat, namun sekarang sering ditampilkan dalam upacara
                            resmi dan sebagai penyambutan tamu. Gerakan Tari Gambyong menonjolkan keanggunan dan kelembutan penari perempuan 
                            yang diiringi oleh musik gamelan.</p>
                    </div>
                    <div className="bg-gray-100 hover:bg-gray-300 p-4 rounded mt-20">
                        <img src={gedung} alt="Raul" className="w-full h-80 object-cover mb-4 rounded"/>
                        <h3 className="text-2xl font-bold pb-5">Lawang Sewu</h3>
                        <p className="text-slate-700 text-lg mt-3">Lawang Sewu artinya Seribu Pintu adalah bekas bangunan perkantoran yang 
                            terletak di seberang Tugu Muda, Kota Semarang, Jawa Tengah, Indonesia. Bangunan ini dahulu merupakan kantor pusat 
                            Nederlandsch-Indische Spoorweg Maatschappij (NIS), dan saat ini berstatus sebagai aset Kereta Api Indonesia (KAI). 
                            Hal ini terjadi karena merupakan hasil dari perebutan aset-aset NIS dan perusahaan kereta api lain oleh Djawatan 
                            Kereta Api Republik Indonesia (DKARI) pada masa Perang Kemerdekaan. 
                            </p>
                    </div>
                    <div className="bg-gray-100 hover:bg-gray-300 p-4 rounded mt-20">
                        <img src={makanan} alt="Raul" className="w-full h-80 object-cover mb-4 rounded"/>
                        <h3 className="text-2xl font-bold pb-5">Tahu Gimbal</h3>
                        <p className="text-slate-700 text-lg mt-3">Tahu Gimbal adalah makanan khas Kota Semarang. Makanan ini terdiri dari tahu goreng, 
                            rajangan kol mentah, lontong, taoge, telur, dan gimbal (udang yang digoreng dengan tepung) dan dicampur dengan 
                            bumbu kacang yang khas karena menggunakan petis udang. Beda dengan saus kacang untuk pecel Madiun yang agak kental. 
                            Saus bumbu kacang untuk tahu gimbal agak sedikit encer.</p>
                    </div>
            </div>
        </section>
    )
}

export default Jateng;