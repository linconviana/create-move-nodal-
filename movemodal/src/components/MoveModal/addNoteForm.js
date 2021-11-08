import { v4 as uuidv4 } from "uuid";

export default function AddNoteForm({ btnTitulo, Title, Body, modalId, setAddItem, addItem, notes, setNotes }) {

    debugger

    const handleSubmit = (e) => {
        e.preventDefault();
    
        /// :: Verificar se o modal não esta aberto
        var isOpenModal = notes.find(x => x.modalId === modalId);
        if(isOpenModal === undefined){
            
            let newNote = {
                id: uuidv4(),
                name: Title,
                description: Body,
                modalId: modalId
              };
            setNotes([...notes, newNote]);
            setAddItem(!addItem);
        }
    };  

  return (
      <>
        <button type="button" className="btn btn-primary" onClick={(e) => handleSubmit(e)} > {btnTitulo} </button>
     </>
  );
}