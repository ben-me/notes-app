import styled from "@emotion/styled";
import InputNote from "./components/InputNote";
import Container from "@mui/material/Container";
import { useEffect, useState } from "react";

function App() {
  const [noteList, setNoteList] = useState(
    JSON.parse(localStorage.getItem("localNotes")) || []
  );

  useEffect(() => {
    console.log(noteList);
    localStorage.setItem("localNotes", JSON.stringify(noteList));
  }, [noteList]);

  return (
    <>
      <Navbar>
        <NavText>Notes!</NavText>
      </Navbar>
      <main>
        <Container sx={{ display: "flex", justifyContent: "center" }}>
          <InputNote onSetNoteList={setNoteList} noteList={noteList} />
        </Container>
        <section></section>
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
