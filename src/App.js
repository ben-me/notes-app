import styled from "@emotion/styled";
import InputNote from "./components/InputNote";
import Container from "@mui/material/Container";
import { useEffect, useState } from "react";
import Note from "./components/Note";

function App() {
  const [noteList, setNoteList] = useState(
    JSON.parse(localStorage.getItem("localNotes")) || []
  );

  useEffect(() => {
    console.log(noteList);
    localStorage.setItem("localNotes", JSON.stringify(noteList));
  }, [noteList]);

  function deleteNote(noteID) {
    const filteredNotes = noteList.filter((note) => note.id !== noteID);
    console.log(filteredNotes);
    setNoteList(filteredNotes);
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
