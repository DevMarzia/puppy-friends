import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchPuppies } from "../Redux/puppies/puppiesSlice";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import emailjs from "emailjs-com";

function PuppyDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { items: puppies, status, error } = useSelector((state) => state.puppies);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    if (puppies.length === 0) {
      dispatch(fetchPuppies());
    }
  }, [dispatch, puppies.length]);

  const puppy = puppies.find((p) => p.id === id || p.id === Number(id));

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!puppy) return;

    const templateParams = {
      puppy_name: puppy.name,
      full_name: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
    };

    emailjs
      .send("service_846va2t", "template_b8ojgkm", templateParams, "OG4kp_nwEjiwow8yh")
      .then(() => {
        alert(`Richiesta di adozione inviata per ${puppy.name}!`);
        setFormData({ fullName: "", email: "", phone:'', message: "" });
        navigate("/cards-puppy"); // mi trasferisce alla home dopo l'invio 
      })
      .catch((err) => {
        console.error("Errore invio email:", err);
        alert("Errore durante l'invio, riprova.");
      });
  };

  if (status === "loading")
    return <p className="text-center mt-20">Caricamento cucciolo...</p>;
  if (status === "failed")
    return <p className="text-center mt-20 text-red-600">{error}</p>;
  if (!puppy)
    return <p className="text-center mt-20 text-gray-700">Cucciolo non trovato.</p>;

  return (
    <>
      <Navbar />
      <div className="max-w-5xl mx-auto px-4 py-8 pt-20 select-none">
        <button
          onClick={() => navigate(-1)}
          className="mb-6 px-4 py-2 bg-[#2389A0] text-[#F3ECE0] rounded hover:bg-[#508692]"
        >
          Indietro
        </button>

        <h1 className="text-4xl font-bold mb-8 text-[#3b2e2e]">{puppy.name}</h1>

        
        <div className="flex flex-col gap-8">
          <div className="flex flex-col lg:flex-row gap-8">
            <img
              src={puppy.image}
              alt={puppy.name}
              draggable="false"
              className="w-full lg:w-1/2 rounded-lg max-h-[400px] object-cover"
            />

            <div className="flex-1 text-[#3B2E2E]">
              <p>
                <strong>Età:</strong> {puppy.age}
              </p>
              <p>
                <strong>Sesso:</strong> {puppy.sex}
              </p>
              <p className="whitespace-pre-wrap mt-4">{puppy.description}</p>
            </div>
          </div>

          {/* FORM  */}
          <div className="bg-[#D7C2A0] p-6 rounded-lg mt-8 text-center">
            <h2 className="text-3xl font-bold mb-4 text-[#3B2E2E]">Richiesta di Adozione</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md mx-auto">
              <input
                type="text"
                name="fullName"
                placeholder="Il tuo nome completo"
                required
                value={formData.fullName}
                onChange={handleChange}
                className="border bg-[#F3ECE0] px-3 py-2 rounded text-[#3B2E2E]"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                value={formData.email}
                onChange={handleChange}
                className="border bg-[#F3ECE0] text-[#3B2E2E] px-3 py-2 rounded"
              />
              <input
              type='tel'
              name="phone"
              placeholder="Inserisci il tuo numero di telefono"
              required
                value={formData.phone}
                onChange={handleChange}
                className="border bg-[#F3ECE0] text-[#3B2E2E] px-3 py-2 rounded"
                
                />
              <textarea
                name="message"
                placeholder="Motivazione per l'adozione, vi ricontattremo al più presto!"
                rows="4"
                required
                value={formData.message}
                onChange={handleChange}
                className="border bg-[#F3ECE0] text-[#3B2E2E] px-3 py-2 rounded"
              />
              <button
                type="submit"
                className="bg-[#2389A0] text-[#F3ECE0] px-4 py-2 rounded hover:bg-[#508692] transition mt-2"
              >
                Invia richiesta
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default PuppyDetail;
