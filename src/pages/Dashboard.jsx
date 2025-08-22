import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PuppyList from '../components/PuppyList.jsx';
import AddPuppyForm from '../components/AddPuppyForm.jsx';
import EditPuppyForm from '../components/EditPuppyForm.jsx';
import Modal from "../components/Modal";  
import { deleteExistingPuppy } from '../Redux/puppies/puppiesSlice';

function Dashboard() {

  const dispatch = useDispatch();
  
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingPuppy, setEditingPuppy] = useState(null);

  const handleEdit = (puppy) => {
    setEditingPuppy(puppy);
  };

  const handleDelete = (puppyId) => {
    if (window.confirm("Sei sicuro di voler eliminare questo cucciolo?")) {
      dispatch(deleteExistingPuppy(puppyId));
    }
  };

  return (
    <>
      <Navbar/>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-17 text-white min-h-[calc(100vh-100px)] select-none">
        
        <h1 className="text-3xl text-center font-bold text-[#3B2E2E]">Gestione Cuccioli</h1>
            
        <br />
          <button
            type="button"
            onClick={() => setShowAddModal(true)}
            className="bg-[#2389A0] hover:bg-[#508692] text-white font-bold py-2 px-4 rounded mb-5"
          >
            Aggiungi Nuovo Cane
          </button>

        <PuppyList onEdit={handleEdit} onDelete={handleDelete} />

        {/* Modale per aggiungere un nuovo cane */}
        <Modal
          isOpen={showAddModal}
          onClose={() => setShowAddModal(false)}
          title="Aggiungi Nuovo Cane"
        >
          <AddPuppyForm
            onSuccess={() => setShowAddModal(false)}
            onCancel={() => setShowAddModal(false)}
          />
        </Modal>

        {/* Modale per modificare il cane*/}
        <Modal
          isOpen={!!editingPuppy}
          onClose={() => setEditingPuppy(null)}
          title={editingPuppy ? `Modifica: ${editingPuppy.name}` : ""}
        >
          {editingPuppy && (
            <EditPuppyForm
              puppyToEdit={editingPuppy}
              onSuccess={() => setEditingPuppy(null)}
              onCancel={() => setEditingPuppy(null)}
            />
          )}
        </Modal>
      </div>
      <Footer/>
    </>
  );
}

export default Dashboard;
