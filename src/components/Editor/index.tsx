import React from "react";
import AceEditor from "react-ace";
import "ace-builds/src-min-noconflict/ext-language_tools";
import "ace-builds/src-min-noconflict/mode-mysql";
import "ace-builds/src-noconflict/theme-monokai";
import { Button, Box, IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
interface EditorProps {
  setValue: Function;
  value: any;
  isOpen: any;
  setQuery: Function;
}

const Editor = (props: EditorProps) => {
  const { setQuery, value, setValue, isOpen } = props || {};
  const onChange = (newValue: any) => {
    setValue(newValue);
  };

  const onSubmit = () => {
    var Z = value.toLowerCase().slice(value.indexOf("from") + "from".length);
    setQuery(Z.split(" ")[1]);
  };

  return (
    <Box style={{ display: "flex", alignItems: "center" }}>
      <IconButton
        color="primary"
        onClick={onSubmit}
        aria-label="upload picture"
        component="label"
      >
        <input hidden accept="image/*" type="file" />
        <PlayCircleIcon />
      </IconButton>
      <AceEditor
        aria-label="editor"
        mode="mysql"
        theme="monokai"
        name="editor"
        fontSize={16}
        minLines={1}
        maxLines={3}
        width="100%"
        showPrintMargin={false}
        showGutter
        placeholder="SELECT * FROM CUSTOMERS"
        editorProps={{ $blockScrolling: true }}
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: true,
        }}
        value={value}
        onChange={onChange}
      />
    </Box>
  );
};

export default Editor;
