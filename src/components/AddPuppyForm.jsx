import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewPuppy } from "../Redux/puppies/puppiesSlice";

function AddPuppyForm({ onSuccess, onCancel }) {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [sex, setSex] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPuppyData = { name, age, description, image, sex };
    dispatch(addNewPuppy(newPuppyData));
    onSuccess(); // Chiudo la modale
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 ">
      <div>
        <label className="block text-sm font-medium text-[#3B2E2E]">Nome</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="mt-1 block w-full rounded-md border bg-[#F3ECE0] text-[#3B2E2E] p-2"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-[#3B2E2E]">Età</label>
        <input
          type="text"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
          className="mt-1 block w-full rounded-md border bg-[#F3ECE0] text-[#3B2E2E] p-2"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-[#3B2E2E]">
          Descrizione
        </label>
        <textarea
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          rows="4"
          className="mt-1 resize-none block w-full rounded-md border bg-[#F3ECE0] text-[#3B2E2E] p-2"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-[#3B2E2E]">
          Immagine
        </label>
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required
          className="mt-1 block w-full rounded-md  border bg-[#F3ECE0] text-[#3B2E2E] p-2"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-[#3B2E2E]">
          Sesso
        </label>
        <select
          value={sex}
          onChange={(e) => setSex(e.target.value)}
          required
          className="mt-1 block w-full rounded-md border bg-[#F3ECE0] text-[#3B2E2E] p-2"
        >
          <option value="" disabled>
            Seleziona un'opzione
          </option>
          <option value="Maschio">Maschio</option>
          <option value="Femmina">Femmina</option>
        </select>
      </div>
      <div className="flex justify-end gap-4 pt-4">
        <button
          type="button"
          onClick={onCancel}
          className="bg-gray-600 text-[#F9F2E9] font-bold py-2 px-4 rounded"
        >
          Annulla
        </button>
        <button
          type="submit"
          className="bg-[#2389A0]  text-[#F9F2E9] font-bold py-2 px-4 rounded"
        >
          Aggiungi Cane
        </button>
      </div>
    </form>
  );
}

export default AddPuppyForm;
