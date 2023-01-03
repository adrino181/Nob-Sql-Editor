import * as React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AssignmentIcon from "@mui/icons-material/Assignment";
import {
  IconButton,
  ListItemText,
  ListItemIcon,
  ListItemButton,
} from "@mui/material";
import {
  SELECT_FROM_EMPLOYEE,
  INSERT_INTO_EMLOYEE,
  CREATE_TABLE_EMPLOYEE,
  CREATE_DEMO_TABLE,
} from "../../constants/constants";

export const mainListItems = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItemButton>
  </React.Fragment>
);

type propList = {
  item: string;
  onRun: Function;
};

let demoObject = [
  {
    title: "Create Table Demo",
    query: CREATE_DEMO_TABLE,
  },
  {
    title: "Create Table Employee",
    query: CREATE_TABLE_EMPLOYEE,
  },
  {
    title: "Insert Into Employee",
    query: INSERT_INTO_EMLOYEE,
  },
  {
    title: "Select from Employee",
    query: SELECT_FROM_EMPLOYEE,
  },
];

const DemoItem = (props: propList) => (
  <>
    <div onClick={() => props.onRun()}>
      <ListItemButton>
        <ListItemIcon>
          <IconButton>
            <AssignmentIcon />
          </IconButton>
        </ListItemIcon>
        <ListItemText primary={props.item} />
      </ListItemButton>
    </div>
  </>
);

type DemoListProp = {
  onRun: Function;
};

const DemoList = (props: DemoListProp) => (
  <>
    {demoObject.map((item, index) => (
      <DemoItem
        key={`item-${index}`}
        onRun={() => props.onRun(item.query)}
        item={item.title}
      />
    ))}
  </>
);

export default DemoList;
