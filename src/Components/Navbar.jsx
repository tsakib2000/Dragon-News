import { Link } from "react-router-dom";
import userIcon from '../assets/user.png'
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const {user,logout}=useContext(AuthContext)


  return (
    <div className="flex justify-between items-center">
      <div>{user?.email}</div>
      <div>
        <ul className="flex gap-4">
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/career'>Career</Link>
        </ul>
      </div>
      <div className="flex gap-2">
        {
          user && user?.email ? ( <div className="flex items-center flex-row-reverse">
            <img className="rounded-full w-10" src={user?.photoURL} alt="" />
            <p>{user?.displayName}</p>
          </div>)  :<img className="rounded-full" src={userIcon} alt="" />
        }
      
        {
          user && user?.email ? <button onClick={logout} className="btn text-white rounded-none btn-neutral" >Logout</button>:<Link to='/auth/login' className="btn text-white rounded-none btn-neutral">Log In</Link>
        }
        
      </div>
    </div>
  );
};

export default Navbar;
