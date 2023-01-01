import { useEffect, useState } from "react";
import alasql from "alasql";
// import toast from "react-hot-toast";
import TABLE_NAMES from "../constants/constants";

const getURL = (name: string) =>
  `https://api.github.com/repos/graphql-compose/graphql-compose-examples/contents/examples/northwind/data/csv/${name}.csv`;

const useData = (tableName: string) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [runtime, setRuntime] = useState<number>();
  const convertToJson = (data: string) => {
    alasql
      .promise("SELECT * FROM CSV(?, {headers: false, separator:','})", [data])
      .then((data) => {
        setData(data);
        console.log("query run success")
        //toast.success("Query run successfully");
      })
      .catch((e) => {
        console.log("query failure")
        //toast.error(e.message);
      });
  };

  useEffect(() => {
    const fetchData = (tableName: string) => {
      setData([]);
      const name = TABLE_NAMES.find((name: string) => name === tableName);
      if (name) {
        setError(false);
        fetch(getURL(tableName), {
          headers: {
            Accept: "application/vnd.github.v4+raw",
          },
        })
          .then((res) => {
            if (res.ok) {
              return res.json();
            } else {
              throw new Error("Something went wrong");
            }
          })
          .then((data) => convertToJson(atob(data.content.replace("\n", ""))))
          .catch((error) => {
            console.log("query failure")
            //toast.error(error.message);
          });
      } else {
        setError(true);
        console.log("query failure")
        //toast.error("Please enter a valid query");
      }
    };
  }, [tableName]);

  return { data, runtime, error };
};

export default useData;
