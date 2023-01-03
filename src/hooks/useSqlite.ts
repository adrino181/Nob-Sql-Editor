import React, { useEffect, useState } from 'react';
import initSqlJs from 'sql.js';

declare global {
    interface Window {
        myDb:any;
    }
}

const initSqlite = () => {
    if(initSqlJs){
        (async () => {
          const SQL = await initSqlJs({
            locateFile: (file:string) => (new URL('../../node_modules/sql.js/dist/sql-wasm.wasm', import.meta.url)).toString()
          });
          const db = new SQL.Database();
          window.myDb = db;
        })();
        
      } else {
        console.log("window object doesnt have sql object")
      }
}

const useSqlite = () => {
    let dbInstance = window.myDb || undefined;
    const [connection, setConnection] = useState<boolean>(false);
    let warning = null;
    useEffect(() => {
        if(!dbInstance) {
            initSqlite();
            setConnection(true);
        } 
    }, [connection])

    return {dbInstance, warning, connection}
}

export default useSqlite;