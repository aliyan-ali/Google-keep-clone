import React, { useState } from "react";
import styles from "./Note.css";
import NoteIcons from "../atoms/NoteIcons";
import addIcon from "../atoms/img/addIcon.svg";
import personaddIcon from "../atoms/img/personaddIcon.svg";
import paintIcon from "../atoms/img/paintIcon.svg";
import imgIcon from "../atoms/img/imgIcon.svg";
import archiveIcon from "../atoms/img/archiveIcon.svg";
import moreIcon from "../atoms/img/moreIcon.svg";
import NoteBigIcon from "../atoms/NoteBigIcon";
import DisplayInput from "../atoms/DisplayInput";

const Note = () => {
  const [titleText, setTitleText] = useState(""); // Add state for title text
  const [noteText, setNoteText] = useState("");
  const [cardText, setCardText] = useState([]);

  const handleTitleChange = (event) => {
    setTitleText(event.target.value);
  };

  const handleChange = (event) => {
    setNoteText(event.target.value);
  };

const insertText = (event) => {
  if (
    event.key === "Enter" &&
    titleText.trim() !== "" &&
    noteText.trim() !== ""
  ) {
    setCardText([...cardText, { title: titleText, note: noteText }]);
    setTitleText("");
    setNoteText("");
  }
};

  // const insertText = (event) => {
  //   if (event.key === "Enter") {
  //     setCardText([...cardText, { title: titleText, note: noteText }]); // Store title and note as an object
  //     setTitleText(""); // Clear title input
  //     setNoteText("");
  //   }
  // };

  return (
    <>
      <div className="note">
        <div className="take-note">
          {/* <TakeNoteFirst /> */}
          <div className="second-block">
            <div className="first-block">
              <input
                onKeyPress={insertText}
                value={titleText} // Bind titleText to the title input
                onChange={handleTitleChange} // Handle title input changes
                type="text"
                placeholder="Title"
                className="add-tittle"
              />
              <NoteBigIcon alttext="pinIcon-svg" />
            </div>
            <input
              onKeyPress={insertText}
              value={noteText}
              onChange={handleChange}
              type="text"
              placeholder="Take a note..."
            />
          </div>

          <div className="third-block">
            <div className="iconCom">
              <NoteIcons icon={addIcon} alttxt="addIcon-svg" />
              <NoteIcons icon={personaddIcon} alttxt="personaddIcon-svg" />
              <NoteIcons icon={paintIcon} alttxt="paintIcon-svg" />
              <NoteIcons icon={imgIcon} alttxt="imgIcon-svg" />
              <NoteIcons icon={archiveIcon} alttxt="archiveIcon-svg" />
              <NoteIcons icon={moreIcon} alttxt="moreIcon-svg" />
            </div>
            <div className="btn">
              <button>Close</button>
            </div>
          </div>
        </div>
      </div>
      <div className="output-container">
        {cardText.map((item, index) => (
          <div key={index} className="output">
            <h2>{item.title}</h2>
            <span>{item.note}</span>
            <div className="taken-note-icons">
              <NoteIcons icon={addIcon} alttxt="addIcon-svg" />
              <NoteIcons icon={personaddIcon} alttxt="personaddIcon-svg" />
              <NoteIcons icon={paintIcon} alttxt="paintIcon-svg" />
              <NoteIcons icon={imgIcon} alttxt="imgIcon-svg" />
              <NoteIcons icon={archiveIcon} alttxt="archiveIcon-svg" />
              <NoteIcons icon={moreIcon} alttxt="moreIcon-svg" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Note;
