import React from 'react'
import {Link} from "react-router-dom"
import Addproduct from "../assets/addproduct.png"
import listproduct from '../assets/listproduct.jpeg'


const Sidebar = () => {
  return (
    <div className='py-7 flex justify-center gap-x-2 gap-y-5 w-full bg-white sm:gap-x-4 lg:flex-col lg:pt-20 lg:max-w-60 lg:h-screen lg:justify-start lg:pl-6'>
     <Link to={"/addproduct"}>
     <button className='flexCenter gap-2 rounded-md bg-White h-14 w-44 medium-14 sm:medium-16'>
        <img src={Addproduct} alt="" height={44} width={44}/>
        <span>Add Product</span>
                </button>
        </Link>
        <Link to={"/listproduct"}>
     <button className='flexCenter gap-2 rounded-md bg-white h-14 w-44 medium-14 sm:medium-16'>
        <img src={listproduct} alt="" height={44} width={44}/>
        <span>Product List</span>
                </button>
        </Link>
    </div>
  )
}

export default Sidebar
