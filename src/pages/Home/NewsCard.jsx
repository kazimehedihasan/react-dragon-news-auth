/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const NewsCard = ({newsc}) => {
    const {details,image_url, title, _id } = newsc
    console.log(newsc);
    return (
        <div>
            <div className="card  bg-base-100 shadow-xl mb-16">
  <figure><img src={image_url} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
 {title}

    </h2>
   {
    details.length > 200 
    ? <p>{details.slice(0,200)} <Link

    to={`/news/${_id}`}
    
    className="text-blue-600 font-bold">Read More...</Link></p>
    : <p>{details}</p>

    }
  </div>
</div>
        </div>
    );
};

export default NewsCard;