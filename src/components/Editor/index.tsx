import React, { useState, useRef } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-min-noconflict/ext-language_tools";
import "ace-builds/src-min-noconflict/mode-mysql";
import "ace-builds/src-noconflict/theme-tomorrow";
import { Box, IconButton } from "@mui/material";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import { format } from "sql-formatter";

interface EditorProps {
  isOpen: any;
  setQuery: Function;
  onRun: Function;
  setLogs: Function;
}

const Editor = (props: EditorProps) => {
  const { setQuery, isOpen, onRun, setLogs } = props || {};
  const [value, setValue] = useState<string>("");
  const onChange = (newValue: any) => {
    setValue(newValue);
  };

  const onSubmit = () => {
    if (value) {
      try {
        let queryString = format(value, { language: "mysql" });
        onRun(queryString);
        setLogs({
          title: "Success",
          subtitle: `Query ran success fully  ${queryString}`,
          logType: "success",
        });
      } catch (e) {
        if (e instanceof Error) {
          setLogs({
            title: "Error",
            subtitle: e.message || "",
            logType: "error",
            strong: "Error in Query",
          });
        }
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
        size="large"
      >
        <PlayCircleIcon fontSize="large" />
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
    theme="tomorrow"
    name="editor"
    fontSize={20}
    maxLines={1}
    width="100%"
    showPrintMargin={false}
    showGutter
    placeholder="SELECT * FROM CUSTOMERS"
    editorProps={{ $blockScrolling: true }}
    setOptions={{
      enableBasicAutocompletion: true,
      enableLiveAutocompletion: true,
      enableSnippets: true,
      showLineNumbers: false,
    }}
    value={props.value}
    onChange={props.onChange}
  />
);

export default Editor;
