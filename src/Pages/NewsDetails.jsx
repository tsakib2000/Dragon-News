
import { Link, useLoaderData } from 'react-router-dom';
import RightNav from '../Components/LayoutComponent/RightNav';
import Header from './../Components/Header';


const NewsDetails = () => {
    
    const data= useLoaderData()
    const news= data.data[0]
  
    return (
        <div>
            <header>
            <Header/>
            </header>
         <main className='w-11/12 mx-auto grid  grid-cols-12 gap-5'>
        <section className='col-span-9'>
            <h1 className='font-semibold mb-3'>Dragon News</h1>

            <div className="card bg-base-100 ">
  <figure className="px-10 pt-10">
    <img
      src={news?.image_url}
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{news?.title}</h2>
    <p>{news?.details}</p>
    <div className="card-actions">
      <Link to={`/category/${news?.category_id}`} className="btn bg-pink-600 text-white font-semibold">Back To category</Link>
    </div>
  </div>
</div>
        </section>
        <aside className='col-span-3'>
            <RightNav></RightNav>
        </aside>
         </main>
        </div>
    );
};

export default NewsDetails;