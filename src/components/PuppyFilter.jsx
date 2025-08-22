function PuppyFilterBar({ onAgeChange, onSexChange }) {
  return (
    <div className="bg-gray-800 p-4 rounded-lg mb-6 flex flex-col sm:flex-row gap-4 items-center">
      {/* Filtro per l'età */}
      <div className="w-full sm:w-1/2">
        <input
          type="text"
          id="age"
          onChange={(e) => onAgeChange(e.target.value)}
          className="w-full bg-gray-700 text-white rounded-md p-2 border border-gray-600 focus:ring-sky-500 focus:border-sky-500"
        />
      </div>

      {/* Filtro per il sesso */}
      <div className="w-full sm:w-1/2">
        <select
          id="sex"
          onChange={(e) => onSexChange(e.target.value)}
          className="w-full bg-gray-700 text-white rounded-md p-2 border border-gray-600 focus:ring-sky-500 focus:border-sky-500"
        >
          <option value="Maschio">Maschio</option>
          <option value="Femmina">Femmina</option>
        </select>
      </div>
    </div>
  );
}

export default PuppyFilterBar;
