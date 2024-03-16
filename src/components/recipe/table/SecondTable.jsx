import React, { useEffect, useState } from "react";

const SecondTable = ({ recipe, index }) => {
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
        </tr>
      )}
    </>
  );
};

export default SecondTable;
