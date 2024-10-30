import React from "react";
import Profile from '../asset/orang-removebg-preview.png';

const About = () => {
    return (
        <section id="about" className="py-20 bg-gray-100">
                <h2 className="text-4xl font-bold mb-8 text-gray-800">
                    Tentang Website
                </h2>
            <div className="flex mx-auto text-center px-6">

                <div className="grid grid-cols-1 lg:grid-cols-3 md:flex-row  mb-12">
                    <img src={`${Profile}`} alt="Profile Picture" className="w-50 h-50 object-cover mb-4 md:mb-0 md:mr-13 "/>

                    <div className="text-left pl-14 pt-[5rem]">
                        <p className="text-xl text-gray-700 font-semibold">Seuka singkatan dari seni, bangunan prasejarah, dan makanan khas yang ada di Pulau Jawa.</p>
                        <p className="text-xl text-gray-700 font-semibold mt-11">Website ini berisikan tentang kesenian, banguan prasejarah, dan makanan khas yang berada Pulau Jawa.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About