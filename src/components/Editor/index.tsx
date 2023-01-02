import React, { useState, useRef } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-min-noconflict/ext-language_tools";
import "ace-builds/src-min-noconflict/mode-mysql";
import "ace-builds/src-noconflict/theme-monokai";
import { Button, Box, IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import { format } from "sql-formatter";
import { ConstructionOutlined } from "@mui/icons-material";

interface EditorProps {
  isOpen: any;
  setQuery: Function;
  onRun: Function;
}

const Editor = (props: EditorProps) => {
  const { setQuery, isOpen, onRun } = props || {};
  const [value, setValue] = useState<string>("");
  const onChange = (newValue: any) => {
    setValue(newValue);
  };

  const onSubmit = () => {
    // var Z = value.toLowerCase().slice(value.indexOf("from") + "from".length);
    // setQuery(Z.split(" ")[1]);
    if (value) {
      try {
        let queryString = format(value, { language: "mysql" });
        onRun(queryString);
      } catch (e) {
        console.log("eror in query", e);
      }
    }
  };

  return (
    <Box style={{ display: "flex", alignItems: "center" }}>
      <IconButton
        color="primary"
        onClick={onSubmit}
        aria-label="upload picture"
        component="label"
      >
        <PlayCircleIcon />
      </IconButton>
      <QueryInut value={value} onChange={onChange} />
    </Box>
  );
};

type InputProps = {
  value: string;
  onChange: (x: string) => any;
};

const QueryInut = (props: InputProps) => (
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
    value={props.value}
    onChange={props.onChange}
  />
);

export default Editor;
