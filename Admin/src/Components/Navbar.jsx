import logo from '../assets/react.svg'
import Profileing from "../assets/iphone15.webp"

const Navbar = () => {
  return (
    <nav className="max-w-7xl mx-auto px-4 flex justify-between items-center bg-white py-2 ring-1 ring-slate-900/10 relative">
        <div>
            <img src={logo} alt="" />
        </div>
        <div className='uppercase bold-22 text-white bg-orange-300 px-3 rounded-md
        tracking-widest line-clamp-1 max-xs:bold-18 max-xs:py-2 max-xs:px-1'>Admin Panel</div>
        <div>
            <img src={Profileing} alt="" className='h-12 w-12 rounded-full'/>
        </div>
    </nav>
  )
}

export default Navbar
