import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import logo from '../assets/star.png'

const LatestNews = () => {
  return (
    <div className="flex gap-2 items-center bg-gray-500 p-3 ">
      <p className="inline-block py-1 px-3 text-xl text-white font-medium bg-[#D72050]">
        Latest
      </p>
<Marquee pauseOnHover={true} speed={100 } direction="right">
<Link className="flex" to='/news'><img src={logo} alt="" /> Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Link>
</Marquee>
    </div>
  );
};

export default LatestNews;
