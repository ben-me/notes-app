import styled from "@emotion/styled";
import DescriptionTwoToneIcon from "@mui/icons-material/DescriptionTwoTone";
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
} from "@mui/material";
import DeleteTwoToneIcon from "@mui/icons-material/DeleteTwoTone";

export default function Note({ note, handleDelete }) {
  return (
    <NoteCard>
      <StyledCardHead avatar={<DescriptionTwoToneIcon />} title={note.title} />
      <CardContent>{note.text}</CardContent>
      <CardActions>
        <IconButton>
          <DeleteTwoToneIcon onClick={() => handleDelete(note.id)} />
        </IconButton>
      </CardActions>
    </NoteCard>
  );
}

const NoteCard = styled(Card)`
  width: 250px;
`;

const StyledCardHead = styled(CardHeader)`
  font-size: 1.2rem;
`;
