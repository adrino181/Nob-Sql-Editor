// import React, { useState } from "react";
// import {
//   useTable,
//   useGlobalFilter,
//   useAsyncDebounce,
//   useSortBy,
//   usePagination,
// } from "react-table";
// import { Button } from "@mui/material";
// import CsvDownload from "react-json-to-csv";
// // import { exportToJson } from "../../modules/misc";

// const PageButton = Button;

// const GlobalFilter = ({
//   preGlobalFilteredRows,
//   globalFilter,
//   setGlobalFilter,
// }) => {
//   const count = preGlobalFilteredRows.length;
//   const [value, setValue] = useState(globalFilter);
//   const onChange = useAsyncDebounce((value) => {
//     setGlobalFilter(value || undefined);
//   }, 200);

//   return (
//     <>
//       <label className="flex gap-x-2 items-baseline">
//         <span className="text-primary-dark hidden md:inline-block font-semibold">
//           Search:{" "}
//         </span>
//         <input
//           type="text"
//           className="text-primary-dark rounded-md shadow-sm outline-none border-2 border-gray-300 focus:border-primary-dark transition p-2 w-40 md:w-52 "
//           value={value || ""}
//           onChange={(e) => {
//             setValue(e.target.value);
//             onChange(e.target.value);
//           }}
//           placeholder={`${count} records...`}
//         />
//       </label>
//     </>
//   );
// };

// const Table = ({ columns, data, completeData, query }) => {
//   const {
//     getTableProps,
//     getTableBodyProps,
//     headerGroups,
//     page,
//     prepareRow,
//     previousPage,
//     nextPage,
//     canPreviousPage,
//     canNextPage,
//     state,
//     setPageSize,
//     pageOptions,
//     gotoPage,
//     pageCount,
//     setGlobalFilter,
//     preGlobalFilteredRows,
//   } = useTable(
//     {
//       columns,
//       data,
//     },
//     useGlobalFilter,
//     useSortBy,
//     usePagination
//   );
//   return <></>;
// };

// export default Table;
