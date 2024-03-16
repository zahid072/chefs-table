import React from "react";
import { CiClock2 } from "react-icons/ci";

const Card = ({ recipe, wantToCookHandler }) => {
  const { name, image, description, time, calories, ingredients } = recipe;
  return (
    <div>
      <div className="card max-w-[380px] h-[750px] bg-base-100 shadow-xl p-5 border">
        <figure>
          <img className="h-60 rounded-lg " src={image} alt="Shoes" />
        </figure>
        <div className="card-body p-0 pt-5">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
          <div className="py-4 border-y">
            <h3 className="font-bold text-2xl">
              Ingredient: <span>{ingredients.length}</span>
            </h3>
            <ul className=" *:list-disc h-56 ml-8 mt-4">
              {
                ingredients.map(ingredient => (
                  <li>{ingredient}</li>
                ))
              }
            </ul>
          </div>
          <div className="flex gap-5 py-3">
            <p>
              <CiClock2 className="inline mr-1"/>
              {time}
            </p>
            <p>{calories}</p>
          </div>
          <div className="card-actions justify-start">
            <button
              onClick={() => {
                wantToCookHandler(recipe);
              }}
              className="px-5 py-2 rounded-full bg-[#0BE58A] font-bold"
            >
              Want to cook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
