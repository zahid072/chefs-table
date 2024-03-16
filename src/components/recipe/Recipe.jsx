import React, { useState } from "react";
import Card from "../card/Card";
import FirstTable from "./table/FirstTable";
import SecondTable from "./table/SecondTable";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Recipe = ({ recipes }) => {
  const [count, setCount] = useState(0);
  const [cookingCount, setCookingCount] = useState(0);
  const [tableBody, setTableBody] = useState([]);
  const [cookingTableBody, setCookingTableBody] = useState([]);
  const [totalTime, setTotalTime] = useState(0);
  const [totalCalories, setTotalCalories] = useState(0);

  const wantToCookHandler = (recipe) => {
    if (tableBody.includes(recipe)) {
      toast("already exist");
    } else {
      setCount(count + 1);
      const newTable = [...tableBody, recipe];
      setTableBody(newTable);
    }
  };
  const preparingHandler = (index, recipe, time, calories) => {
    const updatedTableBody = [
      ...tableBody.slice(0, index),
      ...tableBody.slice(index + 1),
    ];
    const updatedCookingTable = [...cookingTableBody, recipe];
    setCookingTableBody(updatedCookingTable);
    setTableBody(updatedTableBody);
    setCookingCount(cookingCount + 1);
    if (count > 0) {
      setCount(count - 1);
    }
    const numberTime = parseInt(time);
    const numberCalories = parseInt(calories);
    setTotalTime(totalTime + numberTime);
    setTotalCalories(totalCalories + numberCalories);
  };
  return (
    <>
      <div className="text-center md:mt-28 mt-10">
        <h1 className="md:text-4xl text-2xl font-bold">Our Recipes</h1>
        <p className="max-w-[700px] mx-auto mt-5">
          Discover delicious recipes with detailed calorie counts in our recipe
          section, perfect for maintaining a balanced and healthy lifestyle.{" "}
        </p>
      </div>
      <div className="flex md:flex-row flex-col-reverse gap-5 mt-10">
        <div className="md:w-3/5 w-full grid md:grid-cols-2 justify-center gap-5">
          {recipes.map((recipe) => (
            <Card
              key={recipe.id}
              recipe={recipe}
              wantToCookHandler={wantToCookHandler}
            />
          ))}
        </div>
        <div className="md:w-2/5 w-full">
          <div className="border rounded-xl py-5">
            <div className="">
              <h1 className="font-bold md:text-2xl text-xl text-center mx-auto border-b max-w-72 pb-4">
                Want to cook: {count}
                <span></span>
              </h1>
              <table className="table">
                {/* head */}
                <thead>
                  <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Time</th>
                    <th>Calorie</th>
                  </tr>
                </thead>
                <tbody className=" border-y-black">
                  {tableBody.map((recipe, index) => (
                    <FirstTable
                      key={recipe.id}
                      preparingHandler={preparingHandler}
                      recipe={recipe}
                      index={index}
                    />
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-5">
              <h1 className="font-bold md:text-2xl text-xl text-center mx-auto border-b max-w-72 pb-4">
                Currently cooking: <span>{cookingCount}</span>
              </h1>
              <table className="table">
                {/* head */}
                <thead>
                  <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Time</th>
                    <th>Calorie</th>
                  </tr>
                </thead>
                <tbody>
                  {cookingTableBody.map((recipe, index) => (
                    <SecondTable
                      key={recipe.id}
                      preparingHandler={preparingHandler}
                      recipe={recipe}
                      index={index}
                    />
                  ))}
                </tbody>
              </table>
              <div className="flex justify-end mt-5 gap-5 font-semibold mr-4">
                <p>
                  Total time: <span>{totalTime} min</span>
                </p>
                <p>
                  Total calories: <span>{totalCalories}</span> calories
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Recipe;
