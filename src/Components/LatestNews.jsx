import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
  return (
    <div className="flex gap-2 items-center bg-gray-500 p-3 ">
      <p className="inline-block py-1 px-3 text-xl text-white font-medium bg-[#D72050]">
        Latest
      </p>
<Marquee>
<Link to='/news'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, unde.</Link>
</Marquee>
    </div>
  );
};

export default LatestNews;
