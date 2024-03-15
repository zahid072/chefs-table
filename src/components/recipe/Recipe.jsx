import React from 'react'
import Card from '../card/Card'
import CookTable from './CookTable'

const Recipe = ({recipes}) => {
  return (
    <> 
    <div className='text-center md:mt-28 mt-10'>
      <h1 className='text-4xl font-bold'>Our Recipes</h1>
      <p className='max-w-[823px] mx-auto'>Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget urna volutpat curabitur elementum mauris aenean neque. </p>
    </div>
      <div className="flex gap-5 mt-10">
        <div className="md:w-3/5 w-full grid md:grid-cols-2 gap-5">
        {
          recipes.map(recipe => <Card key={recipe.id} recipe={recipe}/>)
        }
        </div>
        <div className='md:w-2/5 w-full'>
              <CookTable/>
        </div>
      </div>
    </>
  )
}

export default Recipe

