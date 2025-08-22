import React from "react";
import Hero from "../components/Hero";
import HeroImg2 from "../assets/heroImg.jpg";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Hero />
      <div className=" font-semibold mb-12 m-1 bg-[#3b2e2e]  text-center pb-2 rounded-lg  select-none ">
        <h1 className="title">Perchè scegliere Puppy Friends?</h1>
      </div>

      <div className="container mx-auto  md:px-10 lg:px-10  grid grid-cols-1 lg:grid-cols-2 items-center ">
        
        {/* Testo sopra su mobile, a destra su desktop */}
        <div className="flex flex-col justify-center  md:pl-16 xl:pl-40 md:py-0 select-none order-1 lg:order-2">
          <div className="text-center md:text-left space-y-6">
            <p className="text-[#3b2e2e] text-lg md:text-xl ">
              Puppy Friends non è solo un rifugio: è un ponte tra chi ha bisogno
              di una seconda possibilità e chi ha tanto amore da dare.
              <br />
              Ci impegniamo ogni giorno per garantire{" "}
              <span className="font-semibold">
                {" "}
                cure, affetto e una nuova famiglia{" "}
              </span>{" "}
              a ogni pelosetto. 🐶
            </p>
            <Link to={`/cards-puppy`}>
              <button className="mx-auto md:mx-0 bg-[#2389a0] text-[#f3ece0] font-bold hover:!scale-110 hover:!shadow-xl duration-300 rounded-full mb-8 mt-1">
                Trova il tuo amico a quattro zampe
              </button>
            </Link>
          </div>
          <div className=" text-center md:text-left space-y-6">
            <p className="text-[#3b2e2e] text-lg md:text-xl ">
              <span className=" font-semibold uppercase">
                Cosa ci distingue?
              </span>
              <ul>
                <li>• Adozioni responsabili e accompagnate</li>
                <li>
                  • Tutti i cuccioli sono controllati, vaccinati e microchippati
                </li>
                <li>• Consigli personalizzati per ogni famiglia adottiva</li>
                <li>• Un team che lavora con amore e dedizione</li>
              </ul>
            </p>
          </div>
        </div>

        {/* Immagine sotto su mobile, a sinistra su desktop */}
        <div className="flex flex-col justify-center items-center order-2 lg:order-1 mt-5">
          <motion.img
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", delay: 0.2 }}
            src={HeroImg2}
            alt=""
            draggable="false"
            className="w-[350px] md:w-[550px] xl:w-[750px] rounded-xl select-none drop-shadow-[0_4px_6px_rgba(0,0,0,0.8)] hover:!scale-110 hover:!shadow-xl duration-300 mb-10"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
