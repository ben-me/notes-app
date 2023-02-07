import TextField from "@mui/material/TextField";
import styled from "@emotion/styled";
import ButtonGroup from "@mui/material/ButtonGroup";
import { Button } from "@mui/material";
import uuid from "react-uuid";

export default function InputNote({ onSetNoteList, noteList }) {
  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const title = form.noteTitle.value;
    const text = form.noteText.value;

    const newNote = { id: uuid(), title, text };
    if (newNote) {
      onSetNoteList([newNote, ...noteList]);
    }
  }

  return (
    <InputForm onSubmit={(e) => handleSubmit(e)}>
      <TextField id="noteTitle" placeholder="Titel..." variant="standard" />
      <TextField
        id="noteText"
        multiline
        rows={4}
        placeholder="Text eingeben..."
        variant="standard"
      />
      <StyledButtonGroup>
        <Button type="button" variant="contained" size="small">
          Cancel
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
