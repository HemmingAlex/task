// src/components/Board.js
import React, { useState } from "react";
import Board from "../components/Board";
import { useSelector, useDispatch } from "react-redux";
import { setValue } from "../features/boardFeature/BoardSlice";
import { ColumnProps } from "../components/Collumn/Collumn";
import Link from "next/link";

const App = () => {
  const [columns, setColumns] = useState<ColumnProps[]>([]);

  const value = useSelector((state: any) => state.feature1.value);
  const dispatch = useDispatch();
  const id = 9007199254740991;
  React.useEffect(() => {
    let store;

    const defaultStore = [
      {
        id: "todo",
        status: "to do",
        cards: [],
      },
      {
        id: "prog",
        status: "in progress",
        cards: [],
      },
      {
        id: "comp",
        status: "completed",
        cards: [],
      },
    ];

    // localstorage, global context and state all set, so it works on refresh, on change page and exists respectively
    const storeString =
      localStorage.getItem("board") ?? JSON.stringify(defaultStore);
    store = JSON.parse(storeString);
    setColumns([...store]);
    dispatch(setValue(JSON.stringify([...store])));
  }, []);
  const saveToContext = () => {
    dispatch(setValue(JSON.stringify([...columns])));
    localStorage.setItem("board", JSON.stringify(columns));
    saveToDatabase();
  };

  const saveToDatabase = () => {
    fetch("/api/SaveBoard", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: columns, id: id }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const getFromDatabase = () => {
    fetch(`/api/SaveBoard`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setColumns(data[0].data);

        dispatch(setValue(JSON.stringify([...data[0].data])));
        localStorage.setItem("board", JSON.stringify([...data[0].data]));
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  };

  return (
    <div className="my-8 dark:bg-black dark:text-white ">
      <h1 className="flex justify-center mb-8 text-2xl">Board</h1>
      <div className="flex justify-center">
        <button
          onClick={saveToContext}
          className="bg-green-800 transition-all hover:bg-green-600 rounded border px-2"
        >
          save
        </button>
        <button
          onClick={getFromDatabase}
          className="border  rounded transition-all hover:bg-blue-600 bg-blue-800 px-2 ml-7"
        >
          get
        </button>
        <div className="ml-8 border px-4 py-1 rounded hover:bg-gray-900 transition-all">
          <Link href="/Second-Board">Second Board</Link>
        </div>
      </div>

      <h1 className="flex justify-center my-8">
        <Board
          columns={columns}
          setColumns={(e) => {
            setColumns(e);
            dispatch(setValue(JSON.stringify([...e])));
            localStorage.setItem("board", JSON.stringify(e));
          }}
        />
      </h1>
    </div>
  );
};

export default App;
