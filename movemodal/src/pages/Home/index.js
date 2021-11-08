import { useState } from "react";
import FormModal3 from "../../components/FormModal/index3";
import AddNoteForm from "../../components/MoveModal/addNoteForm";
import Note from "../../components/MoveModal/notes";

const Home = () => {

    const [notes, setNotes] = useState([]);
   const [addItem, setAddItem] = useState(false);

   const addNote = (note) => {
     setNotes(note);
   };

    return(
        <>
        <div style={{height:'100vh'}}>

            <form key={"1"}>
                <input type="text" placeholder="Digite seu nome" />
                <br />
                <br />
                <input type="text" placeholder="Digite seu email" />
                <br />
                <br />
                <button type="button">Salvar</button>
                <br /> <br />
                <AddNoteForm btnTitulo={'Modal 2'} Title={"Teste Modal Titulo 2"} Body={<FormModal3 />} modalId={"2"} addItem={addItem} setAddItem={setAddItem} notes={notes} setNotes={addNote} />
            </form>

            <Note notes={notes} addNote={addNote} />

        </div>
        </>
    )
}

export default Home;