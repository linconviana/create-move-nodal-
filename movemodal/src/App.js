import "./App.css";
import { useState } from "react";
import Home from "./pages/Home";

function App() {
   const [notes, setNotes] = useState([]);
   const [addItem, setAddItem] = useState(false);

   const addNote = (note) => {
     setNotes(note);
   };
 
  return (
    <Home />
  );
}

export default App;