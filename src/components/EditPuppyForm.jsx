import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateExistingPuppy } from "../Redux/puppies/puppiesSlice";

function EditPuppyForm({ puppyToEdit, onSuccess, onCancel }) {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [sex, setSex] = useState("");

  useEffect(() => {
    if (puppyToEdit) {
      setName(puppyToEdit.name);
      setAge(puppyToEdit.age);
      setDescription(puppyToEdit.description);
      setImage(puppyToEdit.image);
      setSex(puppyToEdit.sex || "");
    }
  }, [puppyToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validazione dei campi
    const updatedPuppyData = {
      id: puppyToEdit.id,
      name,
      age,
      description,
      image,
      sex,
    };
    dispatch(updateExistingPuppy(updatedPuppyData));
    onSuccess();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
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
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          className="mt-1 block w-full border rounded-md bg-[#F3ECE0] text-[#3B2E2E] p-2"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-[#3B2E2E]">
          URL Immagine
        </label>
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required
          className="mt-1 block w-full rounded-md border bg-[#F3ECE0] text-[#3B2E2E] p-2"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-[#3B2E2E]">
          Sesso
        </label>
        <select
          value={sex}
          onChange={(e) => setSex(e.target.value)}
          className="mt-1 block w-full rounded-md border bg-[#F3ECE0] text-[#3B2E2E] p-2"
        >
          <option value="Maschio">Maschio</option>
          <option value="Femmina">Femmina</option>
        </select>
      </div>
      <div className="flex justify-end gap-4 pt-4">
        <button
          type="button"
          onClick={onCancel}
          className="bg-gray-600  text-[#F9F2E9] font-bold py-2 px-4 rounded"
        >
          Annulla
        </button>
        <button
          type="submit"
          className="bg-[#2389A0] text-[#F9F2E9] font-bold py-2 px-4 rounded"
        >
          Salva Modifiche
        </button>
      </div>
    </form>
  );
}

export default EditPuppyForm;




