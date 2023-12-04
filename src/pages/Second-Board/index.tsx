import React from "react";
import { useSelector } from "react-redux";
import { CardProps } from "../../components/Card/Card";

import Link from "next/link";

function SecondBOard() {
  const value = useSelector((state: any) => state.feature1.value);
  let store = [
    {
      id: "0",
      status: "no collumns available",
      cards: [{ id: 0, description: "no cards available", date: "n/a" }],
    },
  ];

  try {
    if (value) {
      store = JSON.parse(value);
    }
  } catch (error) {
    console.error("Error parsing JSON:", error);
  }

  return (
    <div>
      <div className="flex justify-center my-8 text-2xl font-bold">
        Immutable Page
      </div>

      <div className="flex justify-center mx-auto border w-20 px-3 py-1 rounded hover:bg-gray-800 transition-all">
        <Link href="/">Home</Link>
      </div>

      <div className="flex justify-center">
        This page is to use the ocntext as the rest was accidently built with
        only prop drilling
      </div>

      <div className="flex justify-center mt-4">
        {store?.map((data: any) => (
          <div key={data?.id} className="mx-4 ">
            {data.status}
            <br />
            {data?.cards?.map?.((input: CardProps) => (
              <div key={input?.id} className="my-2 ">
                date: {input.date}
                <br />
                description: {input.description}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SecondBOard;
