import React from 'react'

const Card = ({recipe}) => {
    const {name, image, description, time, calories, ingredients} = recipe;
  return (
    <div>
      <div className="card w-[380px] bg-base-100 shadow-xl pt-5 border">
  <figure><img className='h-60 rounded-lg ' src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {name}
    </h2>
    <p>{description}</p>
    <div className='py-4 border-y'>
      <h3 className='font-bold text-2xl'>Ingredient: <span>{ingredients.length}</span></h3>
      <ul className=' *:list-disc ml-8 mt-4'>
      <li>{ingredients[0]}</li>
      <li>{ingredients[1]}</li>
      <li>{ingredients[2]}</li>
      </ul>
    </div>
    <div className='flex gap-5 py-3'>
      <p>{time}</p>
      <p>{calories}</p>
    </div>
    <div className="card-actions justify-start">
      <button

       className="px-5 py-2 rounded-full bg-[#0BE58A] font-bold">Want to cook</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default Card

