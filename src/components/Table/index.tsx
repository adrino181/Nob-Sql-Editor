import React from "react";
import useData from "../../hooks/useData";

type Props = {
  query: string;
} & typeof defaultProps;

const defaultProps = {
  query: "",
};

const GGTable = (props: Props) => {
  const { data, runtime, error } = useData(props.query);
  console.log("GG,Table");
  return <></>;
};

export default GGTable;
