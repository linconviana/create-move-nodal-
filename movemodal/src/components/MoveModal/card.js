import React from "react";
import Draggable from "react-draggable";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes} from '@fortawesome/free-solid-svg-icons';

import './styles.css';

export default function Card({ currentNote, notes, addNote }) {
    debugger
return (
   <Draggable grid={[10, 10]} axis='both' bounds='parent'>
     <div className='card fade-in-modal' key={currentNote.id}>
      <div className='heading'>
        <h3>{currentNote.name && currentNote.name}</h3>
        <button>
          <FontAwesomeIcon icon={faTimes} className="fas fa-times" 
            onClick={() => {
              const newNoteList = notes.filter((item) => {
              if (item.id != currentNote.id) {
                  return item;
              }
              });
                addNote(newNoteList);
              }}
          ></FontAwesomeIcon>
        </button>
      </div>
        {currentNote.description}
      </div> 
    </Draggable>
  );
}