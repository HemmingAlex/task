import { Droppable } from "@hello-pangea/dnd";
import Card, { CardProps } from "../Card/Card";
import React, { useState } from "react";

export interface ColumnProps {
  id: string;
  status: string;
  cards: CardProps[];
}

interface CollumnComponentProps {
  column: ColumnProps;
  fullObject: ColumnProps[];
  setColumns: (d: ColumnProps[]) => void;
}

function Collumn({ column, setColumns, fullObject }: CollumnComponentProps) {
  const [newCardText, setNewCardtext] = useState("");

  const getFormattedCurrentDate = () => {
    const currentDate = new Date();
    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    };

    //@ts-ignore
    const formattedDate = currentDate.toLocaleString("en-US", options);
    return formattedDate;
  };

  const addNewCard = (list: ColumnProps) => {
    list?.cards.push({
      id: JSON.stringify(Math.random()),
      description: newCardText,
      date: getFormattedCurrentDate(),
    });
    const store = [...fullObject];
    setColumns(store);

    // how is the pish and the setstate happening before the console logs
  };
  return (
    <Droppable droppableId={column.id}>
      {(provided) => (
        <div
          className="p-4"
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          {column.cards.map((card: CardProps, index: number) => (
            <div key={card?.id} className="block">
              <Card
                key={card.id}
                card={card}
                index={index}
                fullObject={fullObject}
                column={column}
                setColumns={setColumns}
              />
            </div>
          ))}
          {provided.placeholder}
          {column.status !== "completed" && (
            <div className="flex bg-slate-800 p-5 rounded text-white font-bold shadowed border justify-around">
              <button
                className="border px-2 hover:bg-purple-800 bg-blue-800 mr-4 rounded transition-all"
                onClick={() => addNewCard(column)}
              >
                add
              </button>
              <div className="block">
                <label>Description</label>
                <br />
                <textarea
                  className="text-black"
                  value={newCardText}
                  onChange={(e: any) => {
                    setNewCardtext(e.target.value);
                  }}
                />
              </div>
            </div>
          )}
        </div>
      )}
    </Droppable>
  );
}
export default Collumn;
