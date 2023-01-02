import React from "react";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import {
  LibraryBooksTwoTone,
  RestartAltTwoTone,
  TurnedInNotTwoTone,
} from "@mui/icons-material";
import AddTwoToneIcon from "@mui/icons-material/AddTwoTone";

const ToolKit = () => {
  return (
    <Stack
      direction="row"
      sx={{
        background: "white",
        border: "1px solid pink",
        boxShadow: "5px 10px #888888",
      }}
    >
      <IconButton aria-label="Add" color="primary" size="large">
        <AddTwoToneIcon />
      </IconButton>
      <IconButton aria-label="copy" color="primary" size="large">
        <LibraryBooksTwoTone />
      </IconButton>
      <IconButton aria-label="fingerprint" color="error" size="large">
        <RestartAltTwoTone />
      </IconButton>
      <IconButton aria-label="fingerprint" color="success" size="large">
        <TurnedInNotTwoTone />
      </IconButton>
    </Stack>
  );
};

export default ToolKit;
