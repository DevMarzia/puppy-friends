function Card({ puppy }) {
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
      <img
        src={puppy.image}
        alt={puppy.name}
        className="w-full h-56 object-cover"
      />
      <div className="p-6">
        <h3 className="text-2xl font-bold text-white mb-2">{puppy.name}</h3>
        <p className="text-sky-400 mb-2">
          {puppy.age} - {puppy.sex}
        </p>
        <p className="text-gray-300">{puppy.description}</p>
        <button className="mt-4 bg-sky-600 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded-full w-full">
          Scopri di più
        </button>
      </div>
    </div>
  );
}

export default Card;
