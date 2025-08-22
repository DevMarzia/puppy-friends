function InfoChiSiamo() {
  return (
    <div className="text-[#f3ece0] py-12 pb-16 flex justify-center">
      <div className="container max-w-screen-lg grid grid-cols-2 md:grid-cols-4 gap-6 mx-5">
        <div className="text-xs bg-[#2389a0] rounded-xl p-2 drop-shadow-[0_4px_6px_rgba(0,0,0,0.8)] hover:scale-110 hover:shadow-xl duration-300 select-none text-center">
          <p className="text-2xl font-semibold">85.000</p>
          <p className="font-light text-sm">Abbandoni annuali</p>
        </div>
        <div className="text-xs bg-[#2389a0] rounded-xl p-4 drop-shadow-[0_4px_6px_rgba(0,0,0,0.8)] hover:scale-110 hover:shadow-xl duration-300 select-none text-center">
          <p className="text-2xl font-semibold">358.000</p>
          <p>Randagi in Italia</p>
        </div>
        <div className="text-xs bg-[#2389a0] rounded-xl p-4 drop-shadow-[0_4px_6px_rgba(0,0,0,0.8)] hover:scale-110 hover:shadow-xl duration-300 select-none text-center">
          <p className="text-2xl font-semibold">41%</p>
          <p>Comuni organizzati</p>
        </div>
        <div className="text-xs bg-[#2389a0] rounded-xl p-4 drop-shadow-[0_4px_6px_rgba(0,0,0,0.8)] hover:scale-110 hover:shadow-xl duration-300 select-none text-center">
          <p className="text-2xl font-semibold">68%</p>
          <p>Randagismo critico nel Centro-Sud</p>
        </div>
      </div>
    </div>
  );
}
export default InfoChiSiamo;
