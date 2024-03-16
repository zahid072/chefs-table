import React, { useEffect, useState } from "react";

const FirstTable = ({ preparingHandler, recipe, index }) => {
  const [tbody, setTbody] = useState(false);
  const { name, calories, time } = recipe;
  useEffect(() => {
    if (recipe) {
      setTbody(true);
    }
  }, [recipe]);

  return (
    <>
      {tbody && (
        <tr className="bg-base-200 border-y-[#3a35353f]">
          <th>{index + 1}</th>
          <td>{name}</td>
          <td>{time}</td>
          <td>{calories}</td>
          <td>
            <button
              onClick={() => {
                preparingHandler(index, recipe, time, calories);
              }}
              className="px-5 py-2 rounded-full bg-[#0BE58A] font-bold"
            >
              Preparing
            </button>
          </td>
        </tr>
      )}
    </>
  );
};

export default FirstTable;
