import { useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import Navbar from "../Shared/Navbar/Navbar";


const News = () => {
    const {id} = useParams();
  return (
    <div>
  <div>
      <Header></Header>
      <Navbar></Navbar>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div>
            <h1>news details</h1>
        <p>{id}</p>
        </div>
        <div className="md:col-span-2">
 
        </div>
        <div>
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
    </div>
  );
};

export default News;
