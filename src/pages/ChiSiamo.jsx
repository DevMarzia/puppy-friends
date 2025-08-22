import Navbar from "../components/Navbar";
import InfoChiSiamo from "../components/InfoChiSiamo";
import Footer from "../components/Footer";
import ImageCards from "../components/ImageCard";
import MapsKennel from "../components/MapsKennel";

import Giardino from "../assets/giardinoCanile.jpg";
import Entrata from "../assets/entrataCanile.jpg";
import Interno from "../assets/internoCanile.jpg";

function ChiSiamo() {
  const imgStruttura = [
    {
      id: 1,
      title: "Entrata",
      image: Entrata,
      description:
        "L'ingresso del nostro rifugio, un luogo accogliente per tutti coloro che vogliono visitare e adottare.",
    },
    {
      id: 2,
      title: "Interno",
      image: Interno,
      description:
        "Gli spazi interni del canile, dove i cuccioli trovano riparo e conforto.",
    },
    {
      id: 3,
      title: "Giardino",
      image: Giardino,
      description:
        "Un ampio spazio verde dove i nostri amici a quattro zampe possono correre e giocare liberamente.",
    },
  ];

  return (
    <>
      <Navbar></Navbar>
      <div className="select-none pt-20 px-4 md:px-12 ">
        <h1 className=" font-bold mb-4 text-[#3b2e2e] text-center ">
          La Nostra Storia
        </h1>
        <p className="text-lg text-[#3b2e2e] text-center md:text-left leading-relaxed">
          Puppy Friends nasce da un gruppo di volontari che hanno lo scopo di offrire{" "}
          <span className=" font-extrabold">
            una seconda possibilità a chi è stato dimenticato.
          </span>
          <br />
          <br />
          Ogni cucciolo che
          accogliamo ha una storia diversa: alcuni sono stati abbandonati, altri
          salvati da situazioni difficili, ma tutti condividono un desiderio:
          trovare una famiglia che li ami davvero. Nel nostro rifugio non
          troverai solo cani. 
          <br />
          Troverai sorrisi, coccole, lunghe passeggiate, e
          tanta voglia di cambiare il destino di chi non può parlare, ma sa
          donare amore incondizionato. 
          <br /><br />
          Oggi Puppy Friends è più di un canile: è
          una comunità. 
          <br />
          Ogni adozione è una piccola vittoria, ogni coda che
          scodinzola è una nuova speranza.
        </p>
        <br />
        <br />
        <p className="text-[#3b2e2e] text-center text-lg ">
          Alcune info prese da LegaAmbiente
        </p>
      </div>
      <InfoChiSiamo />

      <div className="pb-12 px-6 md:px-20 select-none">
        <h1 className=" font-bold mb-4 text-[#3b2e2e] text-center ">
          Dove ci troviamo?
        </h1>
        <p className="text-[#3b2e2e] text-center md:text-left mb-6 ">
          Ci troviamo in Via Strada Carignano Piccolo a pochi km da Nardò, Lecce.
        </p>
        <div className="my-8">
          <MapsKennel></MapsKennel>
        </div>

        <h1 className="text-4xl font-bold mb-4 text-[#3b2e2e] text-center pb-6 pt-2">
          La Nostra Struttura 
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {imgStruttura.map(({ id, image, description }) => (
            <ImageCards key={id} imgSrc={image} className="mb-6 ">
              <p className="text-lg text-[#3b2e2e]">{description}</p>
            </ImageCards>
          ))}
        </div>
      </div>

      <Footer></Footer>
    </>
  );
}

export default ChiSiamo;
