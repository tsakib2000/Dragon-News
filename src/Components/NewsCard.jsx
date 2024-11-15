/* eslint-disable react/prop-types */

import { FaEye, FaShareAlt} from "react-icons/fa";
import { Link } from "react-router-dom";


const NewsCard = ({singleNews}) => {
  
    const {author,image_url,title,details}=singleNews
    return (
        <div className=" p-4 bg-white rounded-lg shadow-md border border-gray-200">
        {/* Header Section with Author and Share Icon */}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
             src={author.img}
              alt="Author"
              className="w-10 h-10 rounded-full"
            />
            <div className="ml-2">
              <p className="text-sm font-medium text-gray-800">{author.name}</p>
              <p className="text-xs text-gray-500">{author.published_date}</p>
            </div>
          </div>
          <FaShareAlt className="text-gray-500 cursor-pointer" />
        </div>
  
        {/* Title and Thumbnail Image */}
        <h2 className="mt-3 text-lg font-bold text-gray-900">
         {title}
        </h2>
        <img
          src={image_url}
          alt="Article"
          className=" mt-3 rounded-lg object-cover"
        />
  
        {/* Article Details */}
        <p className="mt-3 text-sm text-gray-600">
         {details}
        </p>
        <Link to={`/news/${singleNews._id}`} className="mt-2 text-orange-500 text-sm font-medium">Read More</Link>
  
        {/* Rating and Views */}
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center">
            <div className="flex text-orange-400">
        
            </div>
            <p className="ml-2 text-sm font-medium text-gray-700">4.9</p>
          </div>
          <div className="flex items-center text-gray-600">
            <FaEye />
            <p className="ml-1 text-sm">499</p>
          </div>
        </div>
      </div>
    );
};

export default NewsCard;