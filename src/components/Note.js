import styled from "@emotion/styled";
import DescriptionTwoToneIcon from "@mui/icons-material/DescriptionTwoTone";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import IconButton from "@mui/material/IconButton";
import DeleteTwoToneIcon from "@mui/icons-material/DeleteTwoTone";

export default function Note({ note, handleDelete }) {
  return (
    <NoteCard>
      <StyledCardHead
        avatar={<DescriptionTwoToneIcon />}
        title={note.title}
        disableTypography
      />
      <StyledCardContent>{note.text}</StyledCardContent>
      <CardActions>
        <IconButton>
          <DeleteTwoToneIcon onClick={() => handleDelete(note)} />
        </IconButton>
      </CardActions>
    </NoteCard>
  );
}

const NoteCard = styled(Card)`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  width: 14rem;
  justify-content: space-between;
  height: fit-content;
  max-height: 250px;
`;

const StyledCardHead = styled(CardHeader)`
  overflow-wrap: anywhere;
  font-size: 1.1rem;
`;

const StyledCardContent = styled(CardContent)`
  overflow-wrap: anywhere;
  overflow: auto;
`;
