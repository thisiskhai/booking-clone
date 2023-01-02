import "./searchItem.css";

const SearchItem = () => {
  return (
    <div className="searchItem">
      <img
        src="https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg?auto=compress&cs=tinysrgb&w=1600"
        alt=""
        className="searchImg"
      />
      <div className="searchDesc">
        <h1 className="searchTitle">Raon Dalat</h1>
        <span className="searchDistance">2.2 km from center</span>
        <span className="searchTaxiOp">Free airport taxi</span>
        <span className="searchSubtitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="searchFeatures">
          Entire studio • 1 bathroom • 21m² 1 full bed
        </span>
        <span className="searchCancelOp">Free cancelation</span>
        <span className="searchCancelSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="searchDetails">
        <div className="searchRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="searchDetailTexts">
          <span className="searchPrice">$112</span>
          <span className="searchTaxOp">Includes taxes and fees</span>
          <button className="searchCheckButton">See availability</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
