import TextField from "@mui/material/TextField";
import styled from "@emotion/styled";
import ButtonGroup from "@mui/material/ButtonGroup";
import { Button } from "@mui/material";

export default function InputNote() {
  return (
    <InputForm>
      <TextField
        id="standard-basic"
        placeholder="Titel..."
        variant="standard"
      />
      <TextField
        id="standard-multiline-static"
        multiline
        rows={4}
        placeholder="Text eingeben..."
        variant="standard"
      />
      <StyledButtonGroup>
        <Button variant="contained" size="small">
          Cancel
        </Button>
        <Button variant="contained" size="small">
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
