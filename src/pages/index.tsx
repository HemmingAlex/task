// src/components/Board.js
import React, { useState } from "react";
import Board from "../components/Board";
import { useSelector, useDispatch } from "react-redux";
import { setValue } from "../features/boardFeature/BoardSlice";
import { ColumnProps } from "../components/Collumn/Collumn";

const App = () => {
  const [columns, setColumns] = useState<ColumnProps[]>([]);

  const value = useSelector((state: any) => state.feature1.value);
  const dispatch = useDispatch();

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
    const storeString =
      localStorage.getItem("board") ?? JSON.stringify(defaultStore);

    store = JSON.parse(storeString);

    setColumns([...store]);
  }, []);
  const saveToContext = () => {
    dispatch(setValue(JSON.stringify([...columns])));
    localStorage.setItem("board", JSON.stringify(columns));
    saveToDatabase();
  };
  const loadFromContext = () => {
    setColumns(JSON.parse(value));
  };

  const saveToDatabase = () => {
    fetch("/api/SaveBoard", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: columns, id: 9007199254740991 }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="my-8">
      <h1 className="flex justify-center">board</h1>
      <div className="flex justify-center">
        <button
          onClick={saveToContext}
          className="bg-green-800 transition-all hover:bg-green-600 rounded border px-2"
        >
          save
        </button>
        <button
          onClick={loadFromContext}
          className="border  rounded transition-all hover:bg-blue-600 bg-blue-800 px-2 ml-7"
        >
          get
        </button>
      </div>
      <h1 className="flex justify-center my-8">
        <Board columns={columns} setColumns={setColumns} />
      </h1>
    </div>
  );
};

export default App;
