import React, { useRef } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import {
  Box,
  Toolbar,
  List,
  Typography,
  Divider,
  IconButton,
  Container,
  Grid,
  Paper,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import HistoryList, { mainListItems } from "./components/listItems";
import Editor from "../components/Editor";
import Drawer from "../components/Drawer";
import AppBar from "./components/AppBar";
import ToolKit from "./components/ToolKit";
import useSqlite from "../hooks/useSqlite";
import Table from "../components/Table";

function DashboardContent() {
  const [open, setOpen] = React.useState(true);
  const [query, setQuery] = React.useState<string>();
  const [queryHistory, setQueryHistory] = React.useState<string[]>([]);
  const [tableData, setTableData] = React.useState<any>();
  const toolTipRef = useRef<HTMLInputElement | null>(null);
  const { dbInstance, warning, connection } = useSqlite();
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const onRun = (query: string) => {
    if (query && queryHistory) {
      if (dbInstance) {
        const res = dbInstance.exec(query);
        setTableData(res);
      }
      setQueryHistory([query, ...queryHistory]);
    }
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="absolute" open={open}>
        <Toolbar
          sx={{
            pr: "24px", // keep right padding when drawer closed
          }}
        >
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer}
            sx={{
              marginRight: "36px",
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            sx={{ flexGrow: 1 }}
          >
            Nob-Sql-Editor
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            px: [1],
          }}
        >
          <IconButton onClick={toggleDrawer}>
            <ChevronLeftIcon />
          </IconButton>
        </Toolbar>
        <Divider />
        <List component="nav">
          {mainListItems}
          <Divider sx={{ my: 1 }} />
          {queryHistory.map((item, index) => (
            <HistoryList item={item} key={index} />
          ))}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: "100vh",
          overflow: "auto",
        }}
      >
        <Toolbar />
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Grid container spacing={3}>
            {/* Chart */}
            <Grid item xs={12} md={8} lg={9}>
              <Paper
                sx={{
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  cursor: "pointer",
                  position: "relative",
                }}
                ref={toolTipRef}
              >
                {
                  <Editor
                    setQuery={() => {}}
                    isOpen={undefined}
                    onRun={onRun}
                  />
                }
                <Box
                  style={{
                    position: "absolute",
                    bottom: "0",
                    right: "0",
                    height: "30px",
                  }}
                >
                  <ToolKit />
                </Box>
              </Paper>
            </Grid>
            {tableData && (
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
                  <Table data={tableData} />
                </Paper>
              </Grid>
            )}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}
