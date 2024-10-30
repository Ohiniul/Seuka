import React from "react";
import jabar from '../asset/gedung/gedung sate.jpg';
import jateng from '../asset/java/tugu muda.jpg';
import jatim from '../asset/java/surabaya.jpg';
import jakarta from '../asset/java/monas.jpg';
import jogja from '../asset/java/tugu jogja.jpg';
import banten from '../asset/java/masjid banten.jpg';

const Project = () => {
    return (
        <section id="projects" className="py-20 bg-black">
            <div className="container mx-auto text-center">
                <h2 className="text-2xl font-bold mb-[5rem] text-white">Java Region</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-gray-100 hover:bg-gray-300 p-4 rounded">
                        <img src={jabar} alt="Raul" className="w-full h-80 object-cover mb-4 rounded"/>
                        <h3 className="text-2xl font-bold pb-5">Jawa Barat</h3>
                        <a href="#jabar" className="bg-rose-700 hover:bg-rose-500 text-white font-bold py-2 px-6 rounded-lg shadow-lg transition duration-300">
                            Lihat Selengkapnya
                        </a>
                    </div>

                    <div className="bg-gray-100 hover:bg-gray-300 p-4 rounded">
                        <img src={jateng} alt="Raul" className="w-full h-80 object-cover mb-4 rounded"/>
                        <h3 className="text-2xl font-bold pb-5">Jawa Tengah</h3>
                        <a href="#jateng" className="bg-rose-700 hover:bg-rose-500 text-white font-bold py-2 px-6 rounded-lg shadow-lg transition duration-300">
                            Lihat Selengkapnya
                        </a>
                    </div>

                    <div className="bg-gray-100 hover:bg-gray-300 p-4 rounded">
                        <img src={jatim} alt="Raul" className="w-full h-80 object-cover mb-4 rounded"/>
                        <h3 className="text-2xl font-bold pb-5">Jawa Timur</h3>
                        <a href="#jatim" className="bg-rose-700 hover:bg-rose-500 text-white font-bold py-2 px-6 rounded-lg shadow-lg transition duration-300">
                            Lihat Selengkapnya
                        </a>
                    </div>

                    <div className="bg-gray-100 hover:bg-gray-300 p-4 rounded">
                        <img src={jakarta} alt="Raul" className="w-full h-80 object-cover mb-4 rounded"/>
                        <h3 className="text-2xl font-bold pb-5">DKI Jakarta</h3>
                        <a href="#DKI" className="bg-rose-700 hover:bg-rose-500 text-white font-bold py-2 px-6 rounded-lg shadow-lg transition duration-300">
                            Lihat Selengkapnya
                        </a>
                    </div>

                    <div className="bg-gray-100 hover:bg-gray-300 p-4 rounded">
                        <img src={jogja} alt="Raul" className="w-full h-80 object-cover mb-4 rounded"/>
                        <h3 className="text-2xl font-bold pb-5">Yogyakarta</h3>
                        <a href="#DIY" className="bg-rose-700 hover:bg-rose-500 text-white font-bold py-2 px-6 rounded-lg shadow-lg transition duration-300">
                            Lihat Selengkapnya
                        </a>
                    </div>

                    <div className="bg-gray-100 hover:bg-gray-300 p-4 rounded">
                        <img src={banten} alt="Raul" className="w-full h-80 object-cover mb-4 rounded"/>
                        <h3 className="text-2xl font-bold pb-5">Banten</h3>
                        <a href="#banten" className="bg-rose-700 hover:bg-rose-500 text-white font-bold py-2 px-6 rounded-lg shadow-lg transition duration-300">
                            Lihat Selengkapnya
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Project;