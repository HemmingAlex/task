import React from "react";
import { useSelector } from "react-redux";

import Link from "next/link";

function SecondPage() {
  const value = useSelector((state: any) => state.feature1.value);

  return (
    <div>
      <div className="flex justify-center my-8 text-2xl font-bold">
        Immutable Page
      </div>

      <div className="flex justify-center mx-auto border w-20 px-3 py-1 rounded hover:bg-gray-800 transition-all">
        <Link className="" href="/">
          Home
        </Link>
      </div>

      <div className="flex justify-center">
        This page is to use the ocntext as the rest was accidently built with
        only prop drilling
      </div>

      <div className="flex justify-center mt-4">
        {JSON.parse(value).map((data: any, index: number) => (
          <div key={data?.id} className="mx-4 ">
            {data.status}
            <br />
            {data.cards?.map?.((input: any, index: number) => (
              <div className="my-2 ">
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

export default SecondPage;