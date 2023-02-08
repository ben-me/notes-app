import TextField from "@mui/material/TextField";
import styled from "@emotion/styled";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import uuid from "react-uuid";
import { useState } from "react";

export default function InputNote({ onSetNoteList, noteList }) {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const newNote = { id: uuid(), title, text };
    if (newNote) {
      onSetNoteList([newNote, ...noteList]);
    }
    setTitle("");
    setText("");
  }

  function handleReset() {
    setTitle("");
    setText("");
  }

  return (
    <InputForm onSubmit={(e) => handleSubmit(e)}>
      <TextField
        type={String}
        id="noteTitle"
        placeholder="Titel..."
        variant="standard"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <TextField
        type={String}
        id="noteText"
        multiline
        rows={4}
        placeholder="Text eingeben..."
        variant="standard"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <StyledButtonGroup>
        <Button
          type="button"
          variant="contained"
          size="small"
          onClick={handleReset}
        >
          Reset
        </Button>
        <Button type="submit" variant="contained" size="small">
          Save
        </Button>
      </StyledButtonGroup>
    </InputForm>
  );
}

const InputForm = styled.form`
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  padding: 1rem;
  max-width: 20rem;
  box-shadow: 0px 0px 12px -1px rgba(0, 0, 0, 0.45);
`;

const StyledButtonGroup = styled(ButtonGroup)`
  padding-top: 1rem;
  display: flex;
  justify-content: end;
  gap: 5px;
`;
