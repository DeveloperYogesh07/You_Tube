import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
// import store from '../utils/store'

const Sidebar = () => {

const isMenuOpen = useSelector((store)=>store.app.isMenuOpen);

// when is menu is not true then return null but when it is true 
if(!isMenuOpen) return null;
//  return this , this is known as early return 
  return (
    <div  className="shadow-lg p-5 w-48">
      <ul>
        <Link to="/"><li>Home</li></Link>
        <li>Shorts</li>
        <li>videos</li>
        <li>live</li>
      </ul>
      <h1 className='font-bold pt-5'>subscription</h1>
      <ul>
        <li>music</li>
        <li>sports</li>
        <li>gaming</li>
        <li>movies</li>
      </ul>
      <h1 className='font-bold pt-5'>Watch Later</h1>
      <ul>
        <li>music</li>
        <li>sports</li>
        <li>gaming</li>
        <li>movies</li>
      </ul>
    </div>
  )
}

export default Sidebar