import React, { useState, useRef } from "react";
import { Box, Paper, Alert, AlertTitle } from "@mui/material";
import ToolKit from "./ToolKit";
import Editor from "../../components/Editor";
type Props = {
  onRun: Function;
};

type LogType = "error" | "success" | "info" | "warning" | undefined;
type LogProp = {
  title: string;
  subtitle: string;
  logType: LogType;
  strong: string;
};

const LogPaper = (props: LogProp) => (
  <Paper>
    <Box>
      <Alert severity={props.logType}>
        <AlertTitle>{props.title}</AlertTitle>
        {props.subtitle} — <strong>{props.strong}</strong>
      </Alert>
    </Box>
  </Paper>
);
const QueryEditor = (props: Props) => {
  const [logs, setAllLogs] = useState<LogProp[]>([]);
  const toolkitRef = useRef<HTMLInputElement>(null);
  const handleMouseOut = () => {
    if (toolkitRef.current) {
      toolkitRef.current.style.display = "none";
    }
  };
  const handleMouseOver = () => {
    if (toolkitRef.current) {
      toolkitRef.current.style.display = "block";
    }
  };

  const setLogs = (data: LogProp) => {
    setAllLogs([data, ...logs]);
  };

  return (
    <React.Fragment>
      <Paper
        sx={{
          p: 2,
          display: "flex",
          flexDirection: "column",
          cursor: "pointer",
          position: "relative",
        }}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        {
          <Editor
            setQuery={() => {}}
            isOpen={undefined}
            onRun={props.onRun}
            setLogs={setLogs}
          />
        }
        <Box
          style={{
            position: "absolute",
            bottom: "0",
            right: "0",
            height: "30px",
            display: "none",
          }}
          ref={toolkitRef}
        >
          <ToolKit />
        </Box>
      </Paper>
      {logs.length ? <LogPaper {...logs[0]} /> : null}
    </React.Fragment>
  );
};

export default QueryEditor;
