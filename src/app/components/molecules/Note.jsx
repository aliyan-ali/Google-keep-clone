// import React, { useState, useEffect } from "react";
// import styles from "./Note.css";
// import NoteIcons from "../atoms/NoteIcons";
// import addIcon from "../atoms/img/addIcon.svg";
// import personaddIcon from "../atoms/img/personaddIcon.svg";
// import paintIcon from "../atoms/img/paintIcon.svg";
// import imgIcon from "../atoms/img/imgIcon.svg";
// import archiveIcon from "../atoms/img/archiveIcon.svg";
// import moreIcon from "../atoms/img/moreIcon.svg";
// import NoteBigIcon from "../atoms/NoteBigIcon";
// import DisplayInput from "../atoms/DisplayInput";
// import NoteModal from "./NoteModal"; // Import the modal component

// const Note = () => {
//   const [titleText, setTitleText] = useState("");
//   const [noteText, setNoteText] = useState("");
//   const [cardText, setCardText] = useState([]);
//   const [selectedNoteIndex, setSelectedNoteIndex] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const handleTitleChange = (event) => {
//     setTitleText(event.target.value);
//   };

//   const handleChange = (event) => {
//     setNoteText(event.target.value);
//   };

//   const openModal = (index) => {
//     setSelectedNoteIndex(index);
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setSelectedNoteIndex(null);
//     setIsModalOpen(false);
//   };

//   const editNote = (title, content) => {
//     const updatedCardText = [...cardText];
//     updatedCardText[selectedNoteIndex] = { title, note: content };
//     setCardText(updatedCardText);
//     closeModal();
//   };

//   const insertText = (event) => {
//     if (event.key === "Enter" && noteText.trim() !== "") {
//       setCardText([...cardText, { title: titleText, note: noteText }]);
//       setTitleText("");
//       setNoteText("");
//     }
//   };

//   const insertTextByClose = () => {
//     if (noteText.trim() !== "") {
//       setCardText([...cardText, { title: titleText, note: noteText }]);
//       setTitleText("");
//       setNoteText("");
//     }
//   };

//   // Load data from local storage when the component mounts
//   useEffect(() => {
//     const storedNotes = JSON.parse(localStorage.getItem("notes"));
//      console.log(storedNotes);
//     if (storedNotes) {
//       setCardText(storedNotes);
//     }
//   }, []);

//   // Save data to local storage whenever cardText changes
//   useEffect(() => {
//     localStorage.setItem("notes", JSON.stringify(cardText));
//   }, [cardText]);

//   return (
//     <>
//       {/* ... (your existing code) */}
//       <div className="note">
//         <div className="take-note">
//           {/* <TakeNoteFirst /> */}
//           <div className="second-block">
//             <div className="first-block">
//               <input
//                 onKeyPress={insertText}
//                 value={titleText}
//                 onChange={handleTitleChange}
//                 type="text"
//                 placeholder="Title"
//                 className="add-tittle"
//               />
//               <NoteBigIcon alttext="pinIcon-svg" />
//             </div>
//             <input
//               onKeyPress={insertText}
//               value={noteText}
//               onChange={handleChange}
//               type="text"
//               placeholder="Take a note..."
//             />
//           </div>

//           <div className="third-block">
//             <div className="iconCom">
//               <NoteIcons icon={addIcon} alttxt="addIcon-svg" />
//               <NoteIcons icon={personaddIcon} alttxt="personaddIcon-svg" />
//               <NoteIcons icon={paintIcon} alttxt="paintIcon-svg" />
//               <NoteIcons icon={imgIcon} alttxt="imgIcon-svg" />
//               <NoteIcons icon={archiveIcon} alttxt="archiveIcon-svg" />
//               <NoteIcons icon={moreIcon} alttxt="moreIcon-svg" />
//             </div>
//             <div className="btn">
//               <button onClick={insertTextByClose}>Add Note</button>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="output-container">
//         {cardText.map((item, index) => (
//           <div key={index} className="output" onClick={() => openModal(index)}>
//             <h2>{item.title}</h2>
//             <span>{item.note}</span>
//             <div className="taken-note-icons">
//               <NoteIcons icon={addIcon} alttxt="addIcon-svg" />
//               <NoteIcons icon={personaddIcon} alttxt="personaddIcon-svg" />
//               <NoteIcons icon={paintIcon} alttxt="paintIcon-svg" />
//               <NoteIcons icon={imgIcon} alttxt="imgIcon-svg" />
//               <NoteIcons icon={archiveIcon} alttxt="archiveIcon-svg" />
//               <NoteIcons icon={moreIcon} alttxt="moreIcon-svg" />
//             </div>
//           </div>
//         ))}
//       </div>
//       {/* Render the modal if it is open */}
//       {isModalOpen && (
//         <NoteModal
//           isOpen={isModalOpen}
//           onClose={closeModal}
//           onSave={editNote}
//           title={cardText[selectedNoteIndex].title}
//           content={cardText[selectedNoteIndex].note}
//           className="modal-content"
//         />
//       )}
//     </>
//   );
// };

// export default Note;




// import React, { useState, useEffect } from "react";
// import Styles from "./Note.css";
// import NoteIcons from "../atoms/NoteIcons";
// import addIcon from "../atoms/img/addIcon.svg";
// import personaddIcon from "../atoms/img/personaddIcon.svg";
// import paintIcon from "../atoms/img/paintIcon.svg";
// import imgIcon from "../atoms/img/imgIcon.svg";
// import archiveIcon from "../atoms/img/archiveIcon.svg";
// import moreIcon from "../atoms/img/moreIcon.svg";
// import { auth, firestore } from "../../Firebase";
// import {
//   collection,
//   addDoc,
//   doc,
//   updateDoc,
//   query,
//   where,
//   getDocs,
//   setDoc,
//   onSnapshot,
//   deleteDoc
// } from "firebase/firestore";
// import { useAuthState } from "react-firebase-hooks/auth"; // Import the useAuthState hook











// const Card = () => {


//   const [title, setTitle] = useState("");
//   const [content, setContent] = useState("");
//   const [editTitle, setEditTitle] = useState("");
//   const [editContent, setEditContent] = useState("");
//   const [editNote, setEditNote] = useState(null);
//   const [notes, setNotes] = useState([]);
//   const [isModalOpen, setModalOpen] = useState(false);
//   const [filteredNotes, setFilteredNotes] = useState([]); // State to store filtered notes

//   const [user] = useAuthState(auth); // Get the current user using useAuthState

//   // Firestore collection reference
//   const userNotesCollection = collection(firestore, "notes");








//   const handleAddNote = async () => {
//     if (user && (title || content)) {
//       try {
//         const noteData = {
//           timestamp: new Date(),
//           ownerid: user.uid,
//           title,
//           content,
//           //  include userId here since it's in the collection
//         };

//         const noteRef = await addDoc(userNotesCollection, noteData);
//         console.log("Note added with ID: ", noteRef.id);
//       } catch (error) {
//         console.error("Error adding note: ", error);
//       }

//       setTitle("");
//       setContent("");
//     }
//   };







//   useEffect(() => {
//     if (user) {
//       // console.log(firestore)
//       const filteredUserNotes = notes.filter(
//         (note) => note.ownerid === user.uid
//       );
//       setFilteredNotes(filteredUserNotes);
//     } else {
//       setFilteredNotes([]); // Clear filtered notes when the user logs out
//     }
//   }, [user, notes]);




//   useEffect(() => {
//     // Load notes associated with the current user

//     if (user) {
//       const userNotesQuery = query(userNotesCollection);

//       const unsubscribe = onSnapshot(userNotesQuery, (querySnapshot) => {
//         const notesData = [];
//         querySnapshot.forEach((doc) => {
//           notesData.push({ id: doc.id, ...doc.data() });
//         });
//         setNotes(notesData);
//       });

//       return unsubscribe;
//     } else {
//       setNotes([]); // Clear notes when the user logs out
//     }
//   }, [user]);








//   const handleEditNote = async () => {
//     if (!user) {
//       console.log("User not authenticated");
//       return;
//     }

//     if (editTitle || editContent) {
//       if (editNote) {
//         try {
//           await updateDoc(doc(firestore, "notes", editNote.id), {
//             title: editTitle,
//             content: editContent,
//           });

//           console.log("Note updated with ID: ", editNote.id);
//         } catch (error) {
//           console.error("Error updating note: ", error);
//         }

//         setEditNote(null);
//         setEditTitle("");
//         setEditContent("");
//       }
//     }
//   };





  



//   // delete note
//     const handleDeleteNote = async (note) => {
//        if (editNote) {
//          if (note && user) {
//            try {
//              closeModal();
//              await deleteDoc(doc(firestore, "notes", note.id));

//              console.log("Note deleted with ID: ", note.id);
//            } catch (error) {
//              console.error("Error deleting note: ", error);
//            }
//          }
//        }
//     };



//   const handleKeyPress = (e) => {
//     if (e.key === "Enter") {
//       handleAddNote();
//     }
//   };

//   const openEditModal = (note) => {
//     setModalOpen(true);
//     setEditNote(note);
//     setEditTitle(note.title);
//     setEditContent(note.content);
//   };

//   const closeModal = () => {
//     setModalOpen(false);
//   };

//   const handlecloseandsave = () => {
//     closeModal();    closeModal();

//     handleEditNote();

//     // if (editNote) {
//     //   handleDeleteNote(editNote);
//     // }
//   };


//   return (
//     <div className="container">
//       <div className="noteCard">
//         <input
//           type="text"
//           className="noteTitle"
//           placeholder="Title"
//           value={title}
//           onKeyPress={handleKeyPress}
//           onChange={(e) => setTitle(e.target.value)}
//         />
//         <input
//           className="noteContent"
//           placeholder="Take a note..."
//           value={content}
//           onChange={(e) => setContent(e.target.value)}
//           onKeyPress={handleKeyPress}
//         />
//         <div className="Bottom_icon">
//           <div className="iconCom">
//             <NoteIcons icon={addIcon} alttxt="addIcon-svg" />
//             <NoteIcons icon={personaddIcon} alttxt="personaddIcon-svg" />
//             <NoteIcons icon={paintIcon} alttxt="paintIcon-svg" />
//             <NoteIcons icon={imgIcon} alttxt="imgIcon-svg" />
//             <NoteIcons icon={archiveIcon} alttxt="archiveIcon-svg" />
//             <NoteIcons icon={moreIcon} alttxt="moreIcon-svg" />
//           </div>
//           <p className="text_close" onClick={handleAddNote}>
//             Close
//           </p>
//         </div>
//       </div>
//       <div className="notesGrid">
//         {filteredNotes.map((note, index) => (
//           <div key={index} className="note" onClick={() => openEditModal(note)}>
//             <h2>{note.title}</h2>
//             <p>{note.content}</p>
//             <div className="note_icon">
//               <div className="iconCom">
//                 <NoteIcons icon={addIcon} alttxt="addIcon-svg" />
//                 <NoteIcons icon={personaddIcon} alttxt="personaddIcon-svg" />
//                 <NoteIcons icon={paintIcon} alttxt="paintIcon-svg" />
//                 <NoteIcons icon={imgIcon} alttxt="imgIcon-svg" />
//                 <NoteIcons icon={archiveIcon} alttxt="archiveIcon-svg" />
//                 <NoteIcons icon={moreIcon} alttxt="moreIcon-svg" />
//               </div>
//             </div>
//           </div>
//         ))}
//         {isModalOpen && (
//           <div className="modalOverlay">
//             <div className="modalContent" onClick={(e) => e.stopPropagation()}>
//               <input
//                 className="modal-title"
//                 type="text"
//                 value={editTitle}
//                 onChange={(e) => setEditTitle(e.target.value)}
//               />
//               <input
//                 className="modal-Content"
//                 type="text"
//                 value={editContent}
//                 onChange={(e) => setEditContent(e.target.value)}
//               />
//               <div className="iconCom">
//                 <NoteIcons icon={addIcon} alttxt="addIcon-svg" />
//                 <NoteIcons icon={personaddIcon} alttxt="personaddIcon-svg" />
//                 <NoteIcons icon={paintIcon} alttxt="paintIcon-svg" />
//                 <NoteIcons icon={imgIcon} alttxt="imgIcon-svg" />
//                 <NoteIcons icon={archiveIcon} alttxt="archiveIcon-svg" />
//                 <NoteIcons icon={moreIcon} alttxt="moreIcon-svg" />
//                 <span className="d-btn"  onClick={()=>{handleDeleteNote(editNote)}}>
//                   Delete
//                 </span>
//                 <span className="closeButton" onClick={handlecloseandsave}>
//                   Close
//                 </span>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };
// export default Card;










import React, { useState, useEffect } from "react";
import Styles from "./Note.css";
import NoteIcons from "../atoms/NoteIcons";
import addIcon from "../atoms/img/addIcon.svg";
import personaddIcon from "../atoms/img/personaddIcon.svg";
import paintIcon from "../atoms/img/paintIcon.svg";
import imgIcon from "../atoms/img/imgIcon.svg";
import archiveIcon from "../atoms/img/archiveIcon.svg";
import moreIcon from "../atoms/img/moreIcon.svg";
import { auth, firestore } from "../../Firebase";
import {
  collection,
  addDoc,
  doc,
  updateDoc,
  query,
  where,
  getDocs,
  setDoc,
  onSnapshot,
  deleteDoc
} from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth"; // Import the useAuthState hook
import { onAuthStateChanged } from "firebase/auth";










const Card = () => {


  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [editTitle, setEditTitle] = useState("");
  const [editContent, setEditContent] = useState("");
  const [editNote, setEditNote] = useState(null);
  const [notes, setNotes] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [filteredNotes, setFilteredNotes] = useState([]); // State to store filtered notes
  const [user, setUser] = useState("");

  // Firestore collection reference
  const userNotesCollection = collection(firestore, "notes");






  
  

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user.role, user.email);
        onSnapshot(doc(firestore, "users", user.uid), (doc) => {
          if (doc.exists) {
            const data = { ...doc.data(), userId: user.uid };

            setUser(data);
          }
        });
      } else {
        console.log("user logout...");
      }
    });
  }, []);

  
  
  
    const handleAddNote = async () => {
      if (user && (title || content)) {
        try {
          const noteData = {
            timestamp: new Date(),
            ownerid: user.userId,
            title,
            content,
            //  include userId here since it's in the collection
          };
  
          const noteRef = await addDoc(userNotesCollection, noteData);
          console.log("Note added with ID: ", noteRef.id);
        } catch (error) {
          console.error("Error adding note: ", error);
        }
  
        setTitle("");
        setContent("");
      }
    };
  
  useEffect(() => {
    if (user) {
      if (user.role === "superuser") {
        console.log(user);
        console.log("Fetching notes for superuser...", user.role);
        const q = query(collection(firestore, "notes"));

        onSnapshot(q, (querySnapshot) => {
          const notesData = [];
          querySnapshot.forEach((doc) => {
            notesData.push({ ...doc.data(), id: doc.id });
          });
          setNotes(notesData);
        });
      } else {
        console.log("Fetching notes for regular user...");
        const q = query(
          collection(firestore, "notes"),
          where("ownerid", "==", user.userId)
        );

        onSnapshot(q, (querySnapshot) => {
          const notesData = [];
          querySnapshot.forEach((doc) => {
            notesData.push({ ...doc.data(), id: doc.id });
          });
          setNotes(notesData);
        });
      }
    }
  }, [user]);

  // useEffect(() => {
  //   // Load notes associated with the current user

  //   if (user) {
  //     const userNotesQuery = query(userNotesCollection);

  //     const unsubscribe = onSnapshot(userNotesQuery, (querySnapshot) => {
  //       const notesData = [];
  //       querySnapshot.forEach((doc) => {
  //         notesData.push({ id: doc.id, ...doc.data() });
  //       });
  //       setNotes(notesData);
  //     });

  //     return unsubscribe;
  //   } else {
  //     setNotes([]); // Clear notes when the user logs out
  //   }
  // }, [user]);








  const handleEditNote = async () => {
    if (!user) {
      console.log("User not Logged in");
      return;
    }

    if (editTitle || editContent) {
      if (editNote) {
        try {
          await updateDoc(doc(firestore, "notes", editNote.id), {
            title: editTitle,
            content: editContent,
          });

          console.log("Note updated with ID: ", editNote.id);
        } catch (error) {
          console.error("Error updating note: ", error);
        }

        setEditNote(null);
        setEditTitle("");
        setEditContent("");
      }
    }
  };





  



  // delete note
    const handleDeleteNote = async (note) => {
       if (editNote) {
         if (note && user) {
           try {
             closeModal();
             await deleteDoc(doc(firestore, "notes", note.id));

             console.log("Note deleted with ID: ", note.id);
           } catch (error) {
             console.error("Error deleting note: ", error);
           }
         }
       }
    };



  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAddNote();
    }
  };

  const openEditModal = (note) => {
    setModalOpen(true);
    setEditNote(note);
    setEditTitle(note.title);
    setEditContent(note.content);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handlecloseandsave = () => {
    closeModal();    closeModal();

    handleEditNote();

    // if (editNote) {
    //   handleDeleteNote(editNote);
    // }
  };


  return (
    <div className="container">
      <div className="noteCard">
        <input
          type="text"
          className="noteTitle"
          placeholder="Title"
          value={title}
          onKeyPress={handleKeyPress}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className="noteContent"
          placeholder="Take a note..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <div className="Bottom_icon">
          <div className="iconCom">
            <NoteIcons icon={addIcon} alttxt="addIcon-svg" />
            <NoteIcons icon={personaddIcon} alttxt="personaddIcon-svg" />
            <NoteIcons icon={paintIcon} alttxt="paintIcon-svg" />
            <NoteIcons icon={imgIcon} alttxt="imgIcon-svg" />
            <NoteIcons icon={archiveIcon} alttxt="archiveIcon-svg" />
            <NoteIcons icon={moreIcon} alttxt="moreIcon-svg" />
          </div>
          <p className="text_close" onClick={handleAddNote}>
            Close
          </p>
        </div>
      </div>
      <div className="notesGrid">
        {notes.map((note, index) => (
          <div key={index} className="note" onClick={() => openEditModal(note)}>
            <h2>{note.title}</h2>
            <p>{note.content}</p>
            <div className="note_icon">
              <div className="iconCom">
                <NoteIcons icon={addIcon} alttxt="addIcon-svg" />
                <NoteIcons icon={personaddIcon} alttxt="personaddIcon-svg" />
                <NoteIcons icon={paintIcon} alttxt="paintIcon-svg" />
                <NoteIcons icon={imgIcon} alttxt="imgIcon-svg" />
                <NoteIcons icon={archiveIcon} alttxt="archiveIcon-svg" />
                <NoteIcons icon={moreIcon} alttxt="moreIcon-svg" />
              </div>
            </div>
          </div>
        ))}
        {isModalOpen && (
          <div className="modalOverlay">
            <div className="modalContent" onClick={(e) => e.stopPropagation()}>
              <input
                className="modal-title"
                type="text"
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
              />
              <input
                className="modal-Content"
                type="text"
                value={editContent}
                onChange={(e) => setEditContent(e.target.value)}
              />
              <div className="iconCom">
                <NoteIcons icon={addIcon} alttxt="addIcon-svg" />
                <NoteIcons icon={personaddIcon} alttxt="personaddIcon-svg" />
                <NoteIcons icon={paintIcon} alttxt="paintIcon-svg" />
                <NoteIcons icon={imgIcon} alttxt="imgIcon-svg" />
                <NoteIcons icon={archiveIcon} alttxt="archiveIcon-svg" />
                <NoteIcons icon={moreIcon} alttxt="moreIcon-svg" />
                <span
                  className="d-btn"
                  onClick={() => {
                    handleDeleteNote(editNote);
                  }}
                >
                  Delete
                </span>
                <span className="closeButton" onClick={handlecloseandsave}>
                  Close
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Card;














// import React, { useState, useEffect } from "react";
// import Styles from "./Note.css";
// import NoteIcons from "../atoms/NoteIcons";
// import addIcon from "../atoms/img/addIcon.svg";
// import personaddIcon from "../atoms/img/personaddIcon.svg";
// import paintIcon from "../atoms/img/paintIcon.svg";
// import imgIcon from "../atoms/img/imgIcon.svg";
// import archiveIcon from "../atoms/img/archiveIcon.svg";
// import moreIcon from "../atoms/img/moreIcon.svg";
// import { auth, firestore } from "../../Firebase";
// import {
//   collection,
//   addDoc,
//   doc,
//   updateDoc,
//   query,
//   where,
//   getDocs,
//   setDoc,
//   onSnapshot,
// } from "firebase/firestore";
// import { useAuthState } from "react-firebase-hooks/auth"; // Import the useAuthState hook
// import { deleteDoc } from "firebase/firestore";

// import Image from "next/image";
// import { onAuthStateChanged } from "firebase/auth";

// const Card = () => {
//   const [title, setTitle] = useState("");
//   const [content, setContent] = useState("");
//   const [editTitle, setEditTitle] = useState("");
//   const [editContent, setEditContent] = useState("");
//   const [editNote, setEditNote] = useState(null);
//   const [notes, setNotes] = useState([]);
//   const [isModalOpen, setModalOpen] = useState(false);
//   const [filteredNotes, setFilteredNotes] = useState([]); // State to store filtered notes
//   const [user, setUser] = useState("");

//   // const [user] = useAuthState(auth); // Get the current user using useAuthState
//   //const user = auth.currentUser;
//   // Firestore collection reference
//   const userNotesCollection = collection(firestore, "notes");

//   const handleAddNote = async () => {
//     if (user && (title || content)) {
//       try {
//         const noteData = {
//           timestamp: new Date(),
//           ownerid: user.uid,
//           title,
//           content,
//           //  include userId here since it's in the collection
//         };

//         const noteRef = await addDoc(userNotesCollection, noteData);
//         console.log("Note added with ID: ", noteRef.id);
//       } catch (error) {
//         console.error("Error adding note: ", error);
//       }

//       setTitle("");
//       setContent("");
//     }
//   };

//   //   useEffect(() => {
//   //    if (user) {
//   //      const filteredUserNotes = notes.filter(
//   //        (note) => note.ownerid === user.uid
//   //       );
//   //       setFilteredNotes(filteredUserNotes);
//   //     } else {
//   //      setFilteredNotes([]); // Clear filtered notes when the user logs out
//   //  }

//   //   }, [user, notes]);

//   useEffect(() => {
//     onAuthStateChanged(auth, (user) => {
//       if (user) {
//         console.log(user.role, user.email);
//         onSnapshot(doc(firestore, "users", user.uid), (doc) => {
//           if (doc.exists) {
//             const data = { ...doc.data(), userId: user.uid };

//             setUser(data);
//           }
//         });
//       } else {
//         console.log("user logout...");
//       }
//     });
//   }, []);

//   useEffect(() => {
//     if (user) {
//       if (user.role === "superuser") {
//         console.log(user);
//         console.log("Fetching notes for superuser...", user.role);
//         const q = query(collection(firestore, "notes"));

//         onSnapshot(q, (querySnapshot) => {
//           const notesData = [];
//           querySnapshot.forEach((doc) => {
//             notesData.push({ ...doc.data(), id: doc.id });
//           });
//           setNotes(notesData);
//         });
//       } else {
//         console.log("Fetching notes for regular user...");
//         const q = query(
//           collection(firestore, "notes"),
//           where("ownerid", "==", user.userId)
//         );

//         onSnapshot(q, (querySnapshot) => {
//           const notesData = [];
//           querySnapshot.forEach((doc) => {
//             notesData.push({ ...doc.data(), id: doc.id });
//           });
//           setNotes(notesData);
//         });
//       }
//     }
//   }, [user]);

//   // useEffect(() => {
//   //   // Load notes associated with the current user

//   //   if (user) {
//   //     console.log(user)

//   //     const q = query(
//   //       userNotesCollection,

//   //       where("ownerid", "==", user.uid)
//   //     );
//   //     console.log("user.uid", user.uid);
//   //     onSnapshot(q, (querySnapshot) => {
//   //       const notesData = [];
//   //       querySnapshot.forEach((doc) => {
//   //         notesData.push({ ...doc.data(), id: doc.id });
//   //       });
//   //       setNotes(notesData);
//   //       console.log("user run");
//   //     });
//   //   }

//   //  else if (user.role === "superuser") {
//   //     console.log("check super", user.role);
//   //     const q = query(userNotesCollection);
//   //     onSnapshot(q, (querySnapshot) => {
//   //       const notesData = [];
//   //       querySnapshot.forEach((doc) => {
//   //         notesData.push({ ...doc.data(), id: doc.id });
//   //       });
//   //       setNotes(notesData);
//   //       console.log("superuser run");
//   //     });
//   //   }
//   // }, []);

//   const handleEditNote = async () => {
//     if (!user) {
//       console.log("User not authenticated");
//       return;
//     }

//     if (editTitle || editContent) {
//       if (editNote) {
//         try {
//           await updateDoc(doc(firestore, "notes", editNote.id), {
//             title: editTitle,
//             content: editContent,
//           });

//           console.log("Note updated with ID: ", editNote.id);
//         } catch (error) {
//           console.error("Error updating note: ", error);
//         }

//         setEditNote(null);
//         setEditTitle("");
//         setEditContent("");
//       }
//     }
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === "Enter") {
//       handleAddNote();
//     }
//   };

//   const openEditModal = (note) => {
//     setModalOpen(true);
//     setEditNote(note);
//     setEditTitle(note.title);
//     setEditContent(note.content);
//   };

//   const closeModal = () => {
//     setModalOpen(false);
//   };

//   const handlecloseandsave = () => {
//     closeModal();
//     handleEditNote();
//   };

//   // const deleteNote = async (noteId) => {
//   //   try {
//   //     await deleteDoc(doc(firestore, "notes", noteId)); // Replace 'notes' with your Firestore collection name
//   //     console.log("Note deleted successfully");
//   //   } catch (error) {
//   //     console.error("Error deleting note:", error);
//   //   }
//   // };
//     // delete note
//       const handleDeleteNote = async (note) => {
//          if (editNote) {
//            if (note && user) {
//              try {
//                closeModal();
//                await deleteDoc(doc(firestore, "notes", note.id));
//                console.log("Note deleted with ID: ", note.id);
//              } catch (error) {
//                console.error("Error deleting note: ", error);
//              }
//            }
//          }
//       };

//   return (
//     <div className="container">
//       <div className="noteCard">
//         <input
//           type="text"
//           className="noteTitle"
//           placeholder="Title"
//           value={title}
//           onKeyPress={handleKeyPress}
//           onChange={(e) => setTitle(e.target.value)}
//         />
//         <input
//           className="noteContent"
//           placeholder="Take a note..."
//           value={content}
//           onChange={(e) => setContent(e.target.value)}
//           onKeyPress={handleKeyPress}
//         />
//         <div className="Bottom_icon">
//           <div className="iconCom">
//             <NoteIcons icon={addIcon} alttxt="addIcon-svg" />
//             <NoteIcons icon={personaddIcon} alttxt="personaddIcon-svg" />
//             <NoteIcons icon={paintIcon} alttxt="paintIcon-svg" />
//             <NoteIcons icon={imgIcon} alttxt="imgIcon-svg" />
//             <NoteIcons icon={archiveIcon} alttxt="archiveIcon-svg" />
//             <NoteIcons icon={moreIcon} alttxt="moreIcon-svg" />
//           </div>
//           <p className="text_close" onClick={handleAddNote}>
//             Close
//           </p>
//         </div>
//       </div>
//       <div className="notesGrid">
//         {notes.map((note, index) => (
//           <div key={index} className="note" onClick={() => openEditModal(note)}>
//             <h2>{note.title}</h2>
//             <p>{note.content}</p>
//             <div className="note_icon">
//               <div className="iconCom">
//                 <NoteIcons icon={addIcon} alttxt="addIcon-svg" />
//                 <NoteIcons icon={personaddIcon} alttxt="personaddIcon-svg" />
//                 <NoteIcons icon={paintIcon} alttxt="paintIcon-svg" />
//                 <NoteIcons icon={imgIcon} alttxt="imgIcon-svg" />
//                 <NoteIcons icon={archiveIcon} alttxt="archiveIcon-svg" />
//                 <NoteIcons icon={moreIcon} alttxt="moreIcon-svg" />
//               </div>
//             </div>
//           </div>
//         ))}
//         {isModalOpen && (
//           <div className="modalOverlay">
//             <div className="modalContent" onClick={(e) => e.stopPropagation()}>
//               <input
//                 className="modal-title"
//                 type="text"
//                 value={editTitle}
//                 onChange={(e) => setEditTitle(e.target.value)}
//               />
//               <input
//                 className="modal-Content"
//                 type="text"
//                 value={editContent}
//                 onChange={(e) => setEditContent(e.target.value)}
//               />
//               <div className="iconCom">
//                 <NoteIcons icon={addIcon} alttxt="addIcon-svg" />
//                 <NoteIcons icon={personaddIcon} alttxt="personaddIcon-svg" />
//                 <NoteIcons icon={paintIcon} alttxt="paintIcon-svg" />
//                 <NoteIcons icon={imgIcon} alttxt="imgIcon-svg" />
//                 <NoteIcons icon={archiveIcon} alttxt="archiveIcon-svg" />
//                 <NoteIcons icon={moreIcon} alttxt="moreIcon-svg" />
//                 <span
//                   className="d-btn"
//                   onClick={() => {
//                     handleDeleteNote(editNote);
//                   }}
//                 >
//                   Delete
//                 </span>
//                 <span className="closeButton" onClick={handlecloseandsave}>
//                   Close
//                 </span>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };
// export default Card;
