import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPuppies } from "../Redux/puppies/puppiesSlice";
import { MdModeEdit } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";

function PuppyList({ onEdit, onDelete }) {
  const dispatch = useDispatch();
  const puppies = useSelector((state) => state.puppies.items);
  const puppyStatus = useSelector((state) => state.puppies.status);

  useEffect(() => {
    if (puppyStatus === "idle") {
      dispatch(fetchPuppies());
    }
  }, [puppyStatus, dispatch]);

  if (puppyStatus === "loading") return <p>Caricamento cuccioli...</p>;
  if (puppyStatus === "failed") return <p>Errore nel caricamento dei dati.</p>;

  return (
    <div className="overflow-x-auto bg-gray-800 rounded-lg shadow max-h-[60vh] md:max-h-[70vh] min-h-[600px] md:min-h-[655px] select-none">
      <table className="min-w-full">
        <thead className="bg-gray-700  sticky top-0">
          <tr>
            <th className="p-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
              Immagine
            </th>
            <th className="p-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
              Nome
            </th>
            <th className="p-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider ">
              Descrizione
            </th>
            <th className="p-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
              Sesso
            </th>
            <th className="p-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
              Età
            </th>
            <th className="p-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
              Modifica
            </th>
            <th className="p-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
              Elimina
            </th>
          </tr>
        </thead>

        <tbody className=" divide-y divide-gray-700">
          {puppies.map((puppy) => (
            <tr key={puppy.id}>
              <td className="p-4 ">
                <img
                  src={puppy.image}
                  alt={puppy.name}
                  className="h-12 w-12 rounded-full object-cover"
                  draggable="false"
                />
              </td>
              <td className="p-4 whitespace-nowrap text-sm font-medium text-white">
                {puppy.name}
              </td>
              <td className="p-4 text-sm text-gray-300 max-w-sm">
                <p className="line-clamp-4">{puppy.description}</p>
              </td>
              <td className="p-4 text-sm text-gray-300">{puppy.sex}</td>
              <td className="p-4 whitespace-nowrap text-sm text-gray-300">
                {puppy.age}
              </td>
              <td className="p-4 whitespace-nowrap text-sm font-medium space-x-2">
                <button
                  type="button"
                  onClick={() => onEdit(puppy)}
                  className="text-yellow-400 hover:text-yellow-600 "
                >
                  <MdModeEdit />
                </button>
              </td>
              <td className="p-4 whitespace-nowrap text-sm font-medium space-x-2">
                <button
                  type="button"
                  onClick={() => onDelete(puppy.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <MdDeleteForever />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PuppyList;
