function ImageCard({ children, imgSrc, ...props }) {
  return (
    <div
      {...props}
      className="
        flex flex-col md:flex-row items-center 
        gap-3 md:gap-5 p-4 
        bg-[#d7c2a0] rounded-2xl 
        drop-shadow-[0_4px_6px_rgba(0,0,0,0.8)] 
        hover:!scale-[1.03] hover:!shadow-xl 
        duration-300 
        max-w-full
      "
    >
      <div
        className="
          w-full md:w-40 lg:w-52 
          h-90 md:h-48 
          rounded-2xl overflow-hidden
          flex-shrink-0
        "
      >
        <img
          src={imgSrc}
          alt=""
          className="w-full h-full object-cover object-center"
          draggable="false"
        />
      </div>

      <div
        className="
          text-[#3b2e2e] text-left 
          w-full 
          md:max-w-md 
          select-none
          line-clamp-5
        "
      >
        {children}
      </div>
    </div>
  );
}

export default ImageCard;
