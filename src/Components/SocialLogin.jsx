import { FaGoogle,FaGithub } from "react-icons/fa";
const SocialLogin = () => {
  return (
    <div>
      <h2 className="font-semibold mb-3">Login With</h2>
      <div className="flex flex-col gap-2 *:w-full">
        <button className="btn border border-gray-500 bg-white "><FaGoogle /> Login With Google</button>
        <button className="btn border border-gray-500 bg-white "> <FaGithub /> Login  With Github</button>
      </div>
    </div>
  );
};

export default SocialLogin;
