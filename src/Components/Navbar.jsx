import { Link } from "react-router-dom";
import userIcon from '../assets/user.png'

const Navbar = () => {
  return (
    <div className="flex justify-between items-center">
      <div></div>
      <div>
        <ul className="flex gap-4">
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/career'>Career</Link>
        </ul>
      </div>
      <div className="flex gap-2">
        <img src={userIcon} alt="" />
        <Link to='/auth/login' className="btn text-white rounded-none btn-neutral">Log In</Link>
      </div>
    </div>
  );
};

export default Navbar;
