import React from 'react'
import { CiSearch } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";

const Nav = () => {
  return (
    <>
      <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="mr-2 cursor-pointer lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <li><a href=""></a>Home</li>
     <li><a href=""></a>Recipe</li>
     <li><a href=""></a>About</li>
     <li><a href=""></a>Search</li>
      </ul>
    </div>
    <a className=" font-semibold text-xl">Recipe Calories</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 *:ml-8">
     <li><a href=""></a>Home</li>
     <li><a href=""></a>Recipe</li>
     <li><a href=""></a>About</li>
     <li><a href=""></a>Search</li>
    </ul>
  </div>
    <div className="flex-none gap-2 navbar-end">
    <div className="rounded-full flex items-center gap-2 bg-slate-200 w-32 md:w-[260px] px-3 py-2 md:p-3">
     <CiSearch className='size-6'/>
      <input type="text" placeholder="Search" className=" w-full outline-none bg-transparent md:w-auto " />
    </div>
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className=" rounded-full bg-[#0BE58A] size-10">
          <FaRegUserCircle className="size-5 mx-auto mt-[11px]"/>
        </div>
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default Nav
