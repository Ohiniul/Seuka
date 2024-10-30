import React from "react";
import jabar from '../asset/tari/tari jaipong.jpeg';
import logo from '../asset/logo/jabar.jpg';
import gedung from '../asset/gedung/gedung sate.jpg';
import makan from '../asset/makan/batagor.jpg'


const Jabar = () => {
    return (
        <section id="jabar" className="py-20 bg-black">
            <div className="container mx-auto text-center">
                <h2 className="text-2xl font-bold mb-[3rem] text-white">Jawa Barat</h2>

                <div className="grid grid-cols-1 lg:grid-cols-1 ">
                        <img src={logo} alt="Raul" className="w-80 h-85 object-cover mb-8 rounded flex justify-self-center"/>
                        <h3 className="text-2xl font-bold pb-5 text-white mt-2">Jawa Barat adalah provinsi yang terletak di Pulau Jawa, Indonesia. Jawa Barat berbatasan dengan Banten dan 
                            DKI Jakarta di sebelah barat, Laut Jawa di utara, Jawa Tengah di timur, dan Samudra Hindia di sebelah selatan.
                            Bersama dengan Banten, Jawa Barat disebut sebagai Tatar Sunda atau Pasundan karena merupakan kampung asli masyarakat Sunda, suku terbesar kedua di Indonesia.</h3>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-gray-100 hover:bg-gray-300 p-4 rounded mt-20">
                        <img src={jabar} alt="Raul" className="w-full h-80 object-cover mb-4 rounded"/>
                        <h3 className="text-2xl font-bold pb-5">Tari jaipong</h3>
                        <p className="text-slate-700 text-lg mt-3">Tari Jaipong adalah tarian khas Jawa Barat. 
                            kata jaipong bersal dari masyarakat Karawang yang bersal dari bunyi kendang sebagai iringan tari rakyat yang menurut mereka berbunyi jaipong yang secara onomotofe.
                            Tepak kendang tersebut sebagai iringan tari pergaulan dalam kesenian banjidoran yang berasal dari Subang dan Karawang yang akhirnya menjadi populer dengan istilah jaipongan.
                            </p>
                    </div>
                    <div className="bg-gray-100 hover:bg-gray-300 p-4 rounded mt-20">
                        <img src={gedung} alt="Raul" className="w-full h-80 object-cover mb-4 rounded"/>
                        <h3 className="text-2xl font-bold pb-5">Gedung Sate</h3>
                        <p className="text-slate-700 text-lg mt-3">Gedung Sate merupakan gedung kantor Gubernur Jawa Barat. Gedung ini memiliki ciri khas berupa ornamen tusuk sate pada menara sentralnya, 
                            yang telah lama menjadi penanda atau markah tanah Kota Bandung yang tidak saja dikenal masyarakat di Jawa Barat, tetapi juga seluruh Indonesia bahkan model bangunan 
                            itu dijadikan pertanda bagi beberapa bangunan dan tanda-tanda kota di Jawa Barat.
                            </p>
                    </div>
                    <div className="bg-gray-100 hover:bg-gray-300 p-4 rounded mt-20">
                        <img src={makan} alt="Raul" className="w-full h-80 object-cover mb-4 rounded"/>
                        <h3 className="text-2xl font-bold pb-5">Batagor</h3>
                        <p className="text-slate-700 text-lg mt-3">Batagor merupakan jajanan khas Bandung yang kini sudah dikenal hampir di seluruh wilayah Indonesia.
                                Secara umum, batagor dibuat dari tahu yang dilembutkan dan diisi dengan adonan berbahan ikan tenggiri dan tepung tapioka lalu dibentuk 
                                menyerupai bola yang digoreng dalam minyak panas selama beberapa menit hingga matang. Variasi lainnya yaitu siomay, digoreng dan dihidangkan
                                bersama batagor dan dikombinasikan dengan bumbu kacang, kecap manis, sambal, dan air perasan jeruk nipis sebagai pelengkap.
                            </p>
                    </div>
            </div>
        </section>
    )
}

export default Jabar;