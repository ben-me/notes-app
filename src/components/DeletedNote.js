import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
} from "@mui/material";
import DescriptionTwoToneIcon from "@mui/icons-material/DescriptionTwoTone";
import styled from "@emotion/styled";
import RestoreTwoToneIcon from "@mui/icons-material/RestoreTwoTone";
import CloseTwoToneIcon from "@mui/icons-material/CloseTwoTone";

export default function DeletedNote({ note, onClearFromTrash }) {
  return (
    <Card sx={{ width: "250px" }}>
      <StyledCardHead
        title={note.title}
        avatar={<DescriptionTwoToneIcon />}
        disableTypography
      />
      <CardContent sx={{ textDecoration: "line-through" }}>
        {note.text}
      </CardContent>
      <CardActions>
        <IconButton>
          <CloseTwoToneIcon onClick={() => onClearFromTrash(note)} />
        </IconButton>
        <IconButton>
          <RestoreTwoToneIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

const StyledCardHead = styled(CardHeader)`
  overflow-wrap: anywhere;
  font-size: 1.1rem;
  text-decoration: line-through;
`;
