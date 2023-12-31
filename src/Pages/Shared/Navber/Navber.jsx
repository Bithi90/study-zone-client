import { Link } from 'react-router-dom';
import logo from '../../../assets/download (19).jpg'

const Navber = () => {

    const navOption = <>
        <Link to='/'><li><a>Home</a></li></Link>
        <Link to='/allCourse'><li><a>All Course</a></li></Link>
        <Link><li><a>Details</a></li></Link>
        <Link><li><a>about</a></li></Link>
        
    </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                               {navOption}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl"><img className='h-[40px] w-[40px] rounded-full ' src={logo} alt="" /> Study Zone</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navOption}
                </ul>
            </div>
            <div className="navbar-end">
            <button className="btn btn-warning">Warning</button>
            </div>
        </div>
    );
};

export default Navber;