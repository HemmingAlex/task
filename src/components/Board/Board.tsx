import { DragDropContext } from "@hello-pangea/dnd";
import Column from "../Collumn";
import React, { useState } from "react";
import { ColumnProps } from "../Collumn/Collumn";

interface BoardProps {
  columns: ColumnProps[];
  setColumns: (columns: ColumnProps[]) => void;
}

function Board({ columns, setColumns }: BoardProps) {
  const [showCompleted, setShowCompleted] = useState(false);
  function handleDragEnd(result: any) {
    // If the item was dropped outside of any droppable area, do nothing
    if (!result.destination) {
      return;
    }

    // If the item was dropped in the same place where it was initially located, do nothing
    if (
      result.destination.droppableId === result.source.droppableId &&
      result.destination.index === result.source.index
    ) {
      return;
    }

    // If the item was dropped in a different droppable area, update the state of the application
    const newColumns = [...columns];
    const sourceColumn = newColumns.find(
      (column) => column.id === result.source.droppableId
    );
    const destinationColumn = newColumns.find(
      (column) => column.id === result.destination.droppableId
    );

    if (sourceColumn && destinationColumn) {
      const [removed] = sourceColumn.cards.splice(result.source.index, 1);
      destinationColumn.cards.splice(result.destination.index, 0, removed);
      setColumns(newColumns);
    }
  }

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      {Object.keys(columns).map((column: any, index: number) => (
        <div
          key={columns[column].id}
          style={{
            backgroundColor: "turquoise",
            color: "black",
            fontWeight: "bold",
            padding: "20px",
            borderRadius: "8px",
            margin: "4px",
          }}
          className="m-2 bg-slate-800 text-white p-4 rounded"
        >
          {" "}
          <div className="flex justify-center">{columns[column].status}</div>
          {columns[column].status === "completed" && (
            <button
              onClick={() => setShowCompleted(!showCompleted)}
              className="flex mx-auto border hover:bg-cyan-500 rounded p-2 bg-cyan-400"
            >
              {showCompleted ? "Hide Completed " : `Show Completed`}
            </button>
          )}
          {columns[column].status !== "completed" || showCompleted ? (
            <Column
              key={columns[column].id}
              column={columns[column]}
              fullObject={columns}
              setColumns={setColumns}
            />
          ) : (
            <></>
          )}
          <div className=""></div>
        </div>
      ))}
    </DragDropContext>
  );
}

export default Board;
