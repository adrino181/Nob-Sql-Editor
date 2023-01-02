import React from "react";
import useData from "../../hooks/useData";

type tableData = {
  value: Array<object>;
  column: Array<object>;
};
type Props = {
  data: tableData;
} & typeof defaultProps;

const defaultProps = {
  data: {
    value: [],
    column: [],
  },
};

const Table = (props: Props) => {
  console.log("GG,Table", props.data);
  return <></>;
};

export default Table;
