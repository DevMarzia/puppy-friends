import React, { useEffect } from 'react';

function Modal({ isOpen, onClose, title, children }) {
  
  useEffect(() => {
    // Applico lo stile solo se il modale è aperto
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    // Rimuovo lo stile quando il modale si chiude
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);
  
  // Se il modale non è aperto, non renderizzo nulla
  if (!isOpen) {
    return null;
  }

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      onClick={handleOverlayClick}
      className="fixed inset-0 bg-black/50 flex justify-center items-start z-[1001]"
    >
      <div className="bg-[#D7C2A0] p-6 rounded-lg shadow-xl w-full max-w-md mx-4 mt-20">
        {title && <h3 className="text-2xl font-bold text-[#3b2e2e] mb-4">{title}</h3>}
        {children}
      </div>
    </div>
  );
}

export default Modal;