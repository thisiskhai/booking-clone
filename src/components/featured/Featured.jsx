import "./featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          className="featuredImg"
          src="https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
        />
        <div className="featuredTitle">
          <h1>Double</h1>
          <h2>Demo properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          className="featuredImg"
          src="https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
        />
        <div className="featuredTitle">
          <h1>Single</h1>
          <h2>Demo properties 1</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          className="featuredImg"
          src="https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
        />
        <div className="featuredTitle">
          <h1>President</h1>
          <h2>Demo properties 2</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
