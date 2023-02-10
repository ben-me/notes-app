import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import IconButton from "@mui/material/IconButton";
import DescriptionTwoToneIcon from "@mui/icons-material/DescriptionTwoTone";
import styled from "@emotion/styled";
import RestoreTwoToneIcon from "@mui/icons-material/RestoreTwoTone";
import CloseTwoToneIcon from "@mui/icons-material/CloseTwoTone";

export default function DeletedNote({ note, onClearFromTrash, onRecoverNote }) {
  return (
    <NoteCard>
      <StyledCardHead
        title={note.title}
        avatar={<DescriptionTwoToneIcon />}
        disableTypography
      />
      <StyledCardContent>{note.text}</StyledCardContent>
      <CardActions>
        <IconButton onClick={() => onClearFromTrash(note)}>
          <CloseTwoToneIcon />
        </IconButton>
        <IconButton onClick={() => onRecoverNote(note)}>
          <RestoreTwoToneIcon />
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
  text-decoration: line-through;
`;

const StyledCardContent = styled(CardContent)`
  overflow-wrap: anywhere;
  overflow: auto;
  text-decoration: line-through;
`;
