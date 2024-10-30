import React from "react";
import tari from '../asset/tari/ondel ondeljpg.jpg';
import logo from '../asset/logo/dki.jpg';
import gedung from '../asset/java/monas.jpg';
import makanan from '../asset/makan/ketoprak.jpg';


const DKI = () => {
    return (
        <section id="DKI" className="py-20 bg-black">
            <div className="container mx-auto text-center">
                <h2 className="text-2xl font-bold mb-[3rem] text-white">DKI Jakarta</h2>

                <div className="grid grid-cols-1 lg:grid-cols-1 ">
                        <img src={logo} alt="Raul" className="w-80 h-85 object-cover mb-8 rounded flex justify-self-center"/>
                        <h3 className="text-2xl font-bold pb-5 text-white mt-2">Jakarta, secara resmi bernama Daerah Khusus Ibukota Jakarta atau DKI 
                            Jakarta, sebelumnya dikenal sebagai Batavia adalah ibu kota Indonesia dan sekaligus daerah otonom setingkat provinsi. 
                            Jakarta memiliki lima kota administrasi dan satu kabupaten administrasi. Sementara itu menurut pengertian secara umum, 
                            Jakarta disebut sebagai kota metropolitan. Jakarta terletak di pesisir bagian barat laut Pulau Jawa. Jakarta mendapat julukan 
                            The Big Durian karena dianggap kota yang sebanding dengan Kota New York (Big Apple) di Amerika Serikat</h3>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-gray-100 hover:bg-gray-300 p-4 rounded mt-20">
                        <img src={tari} alt="Raul" className="w-full h-80 object-cover mb-4 rounded"/>
                        <h3 className="text-2xl font-bold pb-5">Ondel-ondel</h3>
                        <p className="text-slate-700 text-lg mt-3">Ondel-ondel adalah bentuk pertunjukan seni khas Betawi yang sering 
                            ditampilkan dalam pesta rakyat. Tampaknya ondel-ondel memerankan leluhur atau nenek moyang yang senantiasa 
                            menjaga anak cucunya atau penduduk suatu desa. Ondel-ondel berupa boneka besar dengan tinggi sekitar 2,5 meter , 
                            dibuat dari anyaman bambu yang disiapkan begitu rupa sehingga mudah dipikul dari dalamnya. Bagian wajah berupa topeng 
                            atau kedok, dengan rambut kepala dibuat dari ijuk. Wajah ondel-ondel laki-laki biasanya dicat dengan warna merah, sedangkan 
                            yang perempuan warna putih. Bentuk pertunjukan ini banyak persamaannya dengan yang ada di beberapa daerah lain.</p>
                    </div>
                    <div className="bg-gray-100 hover:bg-gray-300 p-4 rounded mt-20">
                        <img src={gedung} alt="Raul" className="w-full h-80 object-cover mb-4 rounded"/>
                        <h3 className="text-2xl font-bold pb-5">Monas</h3>
                        <p className="text-slate-700 text-lg mt-3">Monas atau Tugu Monas adalah monumen peringatan setinggi 132 meter (433 kaki) yang terletak 
                            tepat di tengah Lapangan Medan Merdeka, Jakarta Pusat. Monas didirikan untuk mengenang perlawanan dan perjuangan rakyat Indonesia dalam 
                            merebut kemerdekaan dari pemerintahan kolonial Kerajaan Belanda. Pembangunan dimulai pada 17 Agustus 1961 di bawah perintah Presiden 
                            Soekarno dan diresmikan hingga dibuka untuk umum pada 12 Juli 1975 oleh Presiden Soeharto. Tugu ini dimahkotai lidah api yang dilapisi 
                            lembaran emas yang melambangkan semangat perjuangan yang menyala-nyala dari rakyat Indonesia.</p>
                    </div>
                    <div className="bg-gray-100 hover:bg-gray-300 p-4 rounded mt-20">
                        <img src={makanan} alt="Raul" className="w-full h-80 object-cover mb-4 rounded"/>
                        <h3 className="text-2xl font-bold pb-5">Kerak Telur</h3>
                        <p className="text-slate-700 text-lg mt-3">Kerak telur adalah makanan asli daerah Jakarta (Betawi), dengan bahan-bahan beras ketan putih, 
                            telur ayam atau bebek, ebi (udang kering yang diasinkan), ditambah bawang merah goreng, lalu diberi bumbu yang dihaluskan berupa kelapa 
                            sangrai, cabai merah, kencur, jahe, kunyit,sereh halus, merica butiran, garam dan gula pasir. Kerak telor dapat ditemukan pada hari biasa. 
                            Anda bisa menemukan kerak telor di sekitar Kota Tua, Jakarta Barat. Menurut sejarah, Kerak Telor sudah ada dari zaman kolonial Belanda, 
                            kerak telor diciptakan oleh masyarakat Betawi secara tak sengaja Pada tahun 1920-an. Makanan ini cukup digemari oleh banyak sekali masyarakat Betawi.</p>
                    </div>
            </div>
        </section>
    )
}

export default DKI;