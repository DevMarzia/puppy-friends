import HeroImg from "../assets/hero.png";
import { FaPlay } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <>
      <div className="container mx-auto pb-5 pt-16 md:pt-28 px-4 md:px-10 lg:px-10 grid grid-cols-1 lg:grid-cols-2 items-center ">
        {/* Info Rifugio */}
        <div className="flex flex-col justify-center py-14 md:pr-16 xl:pr-40 md:py-0 select-none">
          <div className="text-center md:text-left space-y-6">
            <p className="uppercase text-[#685243]  ">
              Aspetto solo te... Vieni a prendermi!
            </p>
            <h1 className="text-[#3b2e2e] font-extrabold text-4xl !leading-tight md:text-5xl">
              Benvenuto su &nbsp;
              <span className="px-3 py-1.5 rounded-2xl align-middle inline-block bg-[#3b2e2e] text-inherit">
                <span className="!text-[#f3ece0]">Puppy</span>
                &nbsp;
                <span className="!text-[#d7c2a0]">Friends</span>
              </span>
            </h1>

            <p className="text-[#3b2e2e] text-lg md:text-xl font-semibold ">
              Trova il tuo cucciolo ideale e offrigli una nuova casa piena
              d’amore 🐾
            </p>

            {/** Sezione button */}
            <div className="flex gap-8 items-center justify-center md:justify-start">
              <Link to={`/cards-puppy`}>
                <button className="bg-[#2389a0] text-[#f3ece0] font-bold hover:!scale-110 hover:!shadow-xl duration-300 rounded-full">
                  Trova il tuo cucciolo
                </button>
              </Link>
              <Link to={`/chi-siamo`}>
                <button className="text-[#2389a0] flex justify-end items-center border-2 rounded-full hover:!scale-110 hover:!shadow-xl duration-300 gap-1 ">
                  <FaPlay className="  text-[#2389a0]" />
                  Scopri di più
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="flex flex-col justify-center items-center">
          <motion.img
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", delay: 0.2 }}
            src={HeroImg}
            alt=""
            draggable="false" // blocca trascinamento immagine
            className="w-[350px] md:w-[550px] xl:w-[750px] rounded-xl select-none drop-shadow-[0_4px_6px_rgba(0,0,0,0.8)] hover:!scale-110 hover:!shadow-xl duration-300"
          />

          <p className="mt-3 text-sm text-[#2389a0] italic">
            *Le grafiche presenti in questo sito sono generate con AI
          </p>
        </div>
      </div>
    </>
  );
}

export default Hero;
