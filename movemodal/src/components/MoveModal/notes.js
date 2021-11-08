import React from "react";
import Card from "./card";
export default function Complete({ notes, addNote }) {
    debugger
  return (
    <>
     {notes.map((e, index) => (
         <Card key={index} currentNote={e} notes={notes} addNote={addNote} />
     ))}
    </>
   );
}