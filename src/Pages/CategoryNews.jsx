import { useLoaderData } from "react-router-dom";
import NewsCard from "../Components/NewsCard";


const CategoryNews = () => {
    const{ data:news} = useLoaderData()

    return (
        <div>
            <h1 className="font-semibold mb-3">Dragon News Home </h1>
          <div>
              {
              news<=0 ? <p>No News Found </p> :   news.map(singleNews=><NewsCard singleNews={singleNews} key={singleNews._id}/>)
            }
          </div>
        </div>
    );
};

export default CategoryNews;