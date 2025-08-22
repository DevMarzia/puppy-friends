import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPuppies } from "../Redux/puppies/puppiesSlice";
import ImageCard from "../components/ImageCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

function CardsPuppy() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    items: puppies,
    status,
    error,
  } = useSelector((state) => state.puppies);

  const [sexFilter, setSexFilter] = useState("");
  const [ageFilter, setAgeFilter] = useState("");

  useEffect(() => {
    dispatch(fetchPuppies());
  }, [dispatch]);

  const handleCardClick = (puppyId) => {
    navigate(`/card-puppy/${puppyId}`);
  };

  function ageStringToMonths(ageStr) {
    const safeStr = String(ageStr || "").toLowerCase();

    const numMatch = safeStr.match(/\d+/);
    if (!numMatch) return 0;

    const num = parseInt(numMatch[0], 10);

    if (safeStr.includes("ann")) {
      return num * 12;
    } else if (safeStr.includes("mes")) {
      return num;
    }
    return num;
  }

  // Verifica se l’età in mesi rientra nell’intervallo scelto
  function isAgeInRange(puppyAge, range) {
    if (!range) return true;

    const [minStr, maxStr] = range.split("-");
    const min = Number(minStr);
    const max = Number(maxStr);

    const months = ageStringToMonths(puppyAge);
    return months >= min && months <= max;
  }

  // Opzioni da selezionare per il filtro età
  const ageOptions = [
    { label: "Seleziona l'età del cane", value: "" },
    { label: "1-5 mesi", value: "0-5" },
    { label: "6-11 mesi", value: "6-11" },
    { label: "1-5 anni", value: "24-60" },
    { label: "6+ anni", value: "72-245" },
  ];

  if (status === "loading")
    return <p className="text-center">Caricamento cane...</p>;
  if (status === "failed")
    return <p className="text-center text-red-600">{error}</p>;

  return (
    <>
      <Navbar />
      <div className="px-4 py-8 max-w-full mx-auto pt-20 select-none">
        <h2 className="text-4xl font-bold text-center text-[#3b2e2e] mb-10">
          I Nostri Amici A Quattro Zampe
        </h2>

        {/* Filtro per il sesso del cane e per l'età del cane */}
        <div className="flex flex-col md:flex-row justify-center gap-4 mb-8">
          <select
            value={sexFilter}
            onChange={(e) => setSexFilter(e.target.value)}
            className="border px-4 py-2 rounded text-gray-700"
          >
            <option value="">Seleziona il sesso del cane</option>
            <option value="Maschio">Maschio</option>
            <option value="Femmina">Femmina</option>
          </select>

          <select
            value={ageFilter}
            onChange={(e) => setAgeFilter(e.target.value)}
            className="border px-4 py-2 rounded text-gray-700"
          >
            {ageOptions.map(({ label, value }) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </div>

        {/* Lista dei cani */}
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {puppies
            .filter((puppy) => {
              const matchSex = !sexFilter || puppy.sex === sexFilter;
              const matchAge = isAgeInRange(puppy.age, ageFilter);
              return matchSex && matchAge;
            })
            .map((puppy) => (
              <div
                key={puppy.id}
                onClick={() => handleCardClick(puppy.id)}
                className="cursor-pointer"
              >
                <ImageCard imgSrc={puppy.image} className="cursor-pointer">
                  <h3 className="text-2xl font-semibold">{puppy.name}</h3>
                  <p className="text-lg">{puppy.age}</p>
                  <p className="text-lg">{puppy.sex}</p>
                  <p className="text-md mt-2 truncate">{puppy.description}</p>
                </ImageCard>
              </div>
            ))}
        </div>
      </div>
      <div className="fixed bottom-0 w-full">
        <Footer />
      </div>
    </>
  );
}

export default CardsPuppy;


