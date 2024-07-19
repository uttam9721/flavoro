import React from 'react'
import { useDispatch } from 'react-redux';
import { setSearch } from '../redux/slices/SearchSlice';
const Navbar = () => {

  const dispatch = useDispatch();

  return (
    <nav className='flex flex-col lg:flex-row justify-between py-3 mx-6 mb-10'>
        <div className='text-xl font-bold text-gray-600'>
        <h3>{new Date().toUTCString().slice(0,16)}</h3>
        <h1>Gokul Sweet</h1>
        </div>
        <div>
            <input type="search "
            name='search'
            id='' 
            placeholder='Search here'
            autoComplete='off'
            onChange={()=>dispatch(setSearch(e.target.value))}
            className='p-3 border border-gray-400 text-sm rounded-lg outline-none w-full w-full lg:w-[25vw]'
            />
        </div>
    </nav>
  )
};





export default Navbar
