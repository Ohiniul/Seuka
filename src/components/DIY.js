import React from "react";
import tari from '../asset/tari/ramayana.jpg';
import logo from '../asset/logo/DIY.jpg';
import gedung from '../asset/java/tugu jogja.jpg';
import makanan from '../asset/makan/gudeg.jpg';


const DIY = () => {
    return (
        <section id="DIY" className="py-20 bg-black">
            <div className="container mx-auto text-center">
                <h2 className="text-2xl font-bold mb-[3rem] text-white">Daerah Istimewa Yogyakarta</h2>

                <div className="grid grid-cols-1 lg:grid-cols-1 ">
                        <img src={logo} alt="Raul" className="w-80 h-85 object-cover mb-8 rounded flex justify-self-center"/>
                        <h3 className="text-2xl font-bold pb-5 text-white mt-2">Daerah Istimewa Yogyakarta merupakan daerah Istimewa (provinsi yang bersifat istimewa di Indonesia)
                            yang merupakan peleburan dari Negara Kesultanan Yogyakarta dan Negara Kadipaten Paku Alaman dengan ibu kota di Kota Yogyakarta. Daerah Istimewa 
                            Yogyakarta terletak di bagian selatan Pulau Jawa, dan berbatasan dengan Provinsi Jawa Tengah dan Samudra Hindia. Penyebutan nomenklatur Daerah Istimewa 
                            Yogyakarta yang terlalu panjang menimbulkan penyingkatan nomenklatur menjadi DI Yogyakarta atau DIY. Daerah Istimewa Yogyakarta sering dihubungkan dengan 
                            Kota Yogyakarta sehingga secara kurang tepat sering disebut dengan Jogja, Yogya, Yogyakarta, Jogjakarta.</h3>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-gray-100 hover:bg-gray-300 p-4 rounded mt-20">
                        <img src={tari} alt="Raul" className="w-full h-80 object-cover mb-4 rounded"/>
                        <h3 className="text-2xl font-bold pb-5">Sendratari Ramayana</h3>
                        <p className="text-slate-700 text-lg mt-3">Sendratari Ramayana merupakan sebuah pertunjukan yang menggabungkan tari dan drama tanpa dialog yang mengangkat 
                            wiracarita Ramayana karya Walmiki. Sendratari Ramayana menceritakan kisah tentang usaha Rama untuk menyelamatkan Sinta yang diculik oleh Rahwana. 
                            Sendratari Ramayana merupakan salah satu media dalam menyajikan wiracarita atau epos Ramayana, media lain seperti seni sastra, seni rupa, dan bebagai 
                            seni pertunjukan. Sendratari mengutamakan gerak-gerak penguat ekspresi sebagai pengganti dialog, sehingga dengan sendratari diharapkan penyampaian 
                            wiracarita Ramayana dapat lebih mudah dipahami dengan latar belakang budaya dan bahasa penonton yang berbeda.</p>
                    </div>
                    <div className="bg-gray-100 hover:bg-gray-300 p-4 rounded mt-20">
                        <img src={gedung} alt="Raul" className="w-full h-80 object-cover mb-4 rounded"/>
                        <h3 className="text-2xl font-bold pb-5">Tugu Yogyakarta</h3>
                        <p className="text-slate-700 text-lg mt-3">Tugu Yogyakarta adalah sebuah tugu atau monumen yang sering dipakai sebagai simbol atau lambang dari Kota Yogyakarta, 
                            Daerah Istimewa Yogyakarta. Tugu yang terletak di perempatan Jalan Jenderal Sudirman dan Jalan Margo Utomo ini, mempunyai nilai simbolis yang 
                            merupakan garis yang bersifat magis yang menghubungkan Pantai Parangtritis dan Panggung Krapyak di Kabupaten Bantul, Keraton Yogyakarta di Kota 
                            Yogyakarta dan Gunung Merapi di Kabupaten Sleman. Tugu ini sekarang merupakan salah satu objek pariwisata Yogyakarta, dan sering dikenal dengan 
                            istilah “Tugu Pal Putih” (pal juga berarti tugu), karena warna cat yang digunakan sejak dulu adalah warna putih. Tugu pal ini berbentuk bulat panjang 
                            dengan bola kecil dan ujung yang runcing di bagian atasnya.</p>
                    </div>
                    <div className="bg-gray-100 hover:bg-gray-300 p-4 rounded mt-20">
                        <img src={makanan} alt="Raul" className="w-full h-80 object-cover mb-4 rounded"/>
                        <h3 className="text-2xl font-bold pb-5">Gudeg</h3>
                        <p className="text-slate-700 text-lg mt-3">Gudeg adalah hidangan khas Daerah Istimewa Yogyakarta yang terbuat dari nangka muda yang dimasak dengan santan. 
                            Perlu waktu berjam-jam untuk membuat hidangan gudeg. Warna cokelat biasanya dihasilkan oleh daun jati yang dimasak bersamaan. Gudeg biasanya dimakan 
                            dengan nasi dan disajikan dengan kuah santan kental (areh), ayam kampung, telur, tempe, tahu, dan sambal goreng krecek. Gudeg sangat populer di Jawa, 
                            hidangan ini merupakan hidangan populer baik sebagai masakan rumahan maupun hidangan jalanan. Gudeg juga diproduksi secara industri sebagai makanan kaleng.</p>
                    </div>
            </div>
        </section>
    )
}

export default DIY;