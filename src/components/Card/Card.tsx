import { Draggable } from "@hello-pangea/dnd";
import React, { useState, ChangeEvent, MouseEventHandler } from "react";

export interface CardProps {
  id: string;
  description: string;
  date: string;
}

interface CardComponentProps {
  status?: string;
  card: CardProps;
  index: number;
  setColumns: any;
  fullObject: any;
  column: any;
}

function Card({
  card,
  index,
  fullObject,
  setColumns,
  column,
}: CardComponentProps) {
  const [editable, setEditable] = useState(false);
  const [textValue, setTextValue] = useState(card.description);

  const handleTextChange = (e: any) => {
    setTextValue(e.target.value);
    //set the text value
  };
  const saveTextChange = (e: any) => {
    //change th etext value
    card.description = textValue;
    setColumns([...fullObject]);
    setEditable(false);
  };
  const handleDelete = (card: CardProps, index: number) => {
    console.log(column);
    let store = fullObject;
    column.cards.splice(index, 1);

    setColumns([...store]);
  };
  return (
    <Draggable draggableId={card.id} index={index}>
      {(provided) => (
        <div
          style={{ padding: "3px", backgroundColor: "green" }}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div
            style={{
              backgroundColor: "darkorange",
              marginTop: "2px",
              padding: "4px",
              borderRadius: "4px",
            }}
            className="bg-black"
          >
            Date: {card.date}
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="textField"
            >
              description:
            </label>
            <div className="my-4">
              {editable ? (
                <div className="flex">
                  <textarea
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="textField"
                    // type="text"
                    placeholder="Enter your text"
                    onBlur={saveTextChange}
                    onChange={handleTextChange}
                    value={textValue}
                  />
                  <div onClick={saveTextChange} className="pointe -ml-6">
                    &#10003;
                  </div>
                </div>
              ) : (
                <div className="pointer w-72" onClick={() => setEditable(true)}>
                  {textValue}
                </div>
              )}
            </div>
          </div>
          <button
            onClick={() => handleDelete(card, index)}
            className="flex bg-red-500 mx-auto w-full rounded-b-lg justify-center"
          >
            delete
          </button>
        </div>
      )}
    </Draggable>
  );
}

export default Card;
