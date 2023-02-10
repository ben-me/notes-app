import styled from "@emotion/styled";
import React from "react";
import InputNote from "./components/InputNote";
import Container from "@mui/material/Container";
import { useEffect, useState } from "react";
import Note from "./components/Note";
import DeletedNote from "./components/DeletedNote";

function App() {
  const [noteList, setNoteList] = useState(
    JSON.parse(localStorage.getItem("localNotes")) || []
  );
  const [noteBin, setNoteBin] = useState(
    JSON.parse(localStorage.getItem("noteBin")) || []
  );

  useEffect(() => {
    localStorage.setItem("localNotes", JSON.stringify(noteList));
  }, [noteList]);

  useEffect(() => {
    localStorage.setItem("noteBin", JSON.stringify(noteBin));
  }, [noteBin]);

  function deleteNote(deletedNote) {
    const filteredNotes = noteList.filter((note) => note.id !== deletedNote.id);
    setNoteList(filteredNotes);
    setNoteBin([deletedNote, ...noteBin]);
  }

  function clearFromTrash(selectedNote) {
    const filteredNoteBin = noteBin.filter(
      (note) => note.id !== selectedNote.id
    );
    setNoteBin(filteredNoteBin);
  }

  function recoverNote(recoveredNote) {
    const filteredNoteBin = noteBin.filter(
      (note) => note.id !== recoveredNote.id
    );
    setNoteList([recoveredNote, ...noteList]);
    setNoteBin(filteredNoteBin);
  }

  return (
    <>
      <Navbar>
        <NavText>Notes!</NavText>
      </Navbar>
      <main>
        <InputContainer>
          <InputNote onSetNoteList={setNoteList} noteList={noteList} />
        </InputContainer>
        <NoteContainer>
          {noteList.map((note) => (
            <Note note={note} key={note.id} handleDelete={deleteNote} />
          ))}
        </NoteContainer>
        <h3>Recycle bin</h3>
        <NoteContainer>
          {noteBin.map((note) => (
            <DeletedNote
              note={note}
              key={note.id}
              onClearFromTrash={clearFromTrash}
              onRecoverNote={recoverNote}
            />
          ))}
        </NoteContainer>
      </main>
    </>
  );
}

export default App;

const Navbar = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  background-color: #1976d2;
  height: 2.5rem;
  width: 100%;
  margin-bottom: 1rem;
`;

const NavText = styled.h2`
  margin: 0;
  font-size: x-large;
  text-decoration: underline;
`;

const InputContainer = styled(Container)`
  display: flex;
  justify-content: center;
`;

const NoteContainer = styled(Container)`
  display: flex;
  gap: 20px;
  margin: 2rem 0;
`;
