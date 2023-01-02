import "./featuredProperties.css";

const FeaturedProperties = () => {
  return (
    <div className="fp">
      <div className="fpItem">
        <img
          src="https://images.pexels.com/photos/4915547/pexels-photo-4915547.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
          className="fpImg"
        />
        <span className="fpName">
          3 Epoques Apartments by Prague Residences
        </span>
        <span className="fpCity">Da Lat</span>
        <span className="fpPrice">Starting from $150</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
          className="fpImg"
        />
        <span className="fpName">
          6 Continents Apartments by Prague Residences
        </span>
        <span className="fpCity">Ha Noi</span>
        <span className="fpPrice">Starting from $190</span>
        <div className="fpRating">
          <button>8.4</button>
          <span>Very Good</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://images.pexels.com/photos/2506990/pexels-photo-2506990.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Aparthotel Stare Miasto</span>
        <span className="fpCity">Ho Chi Minh</span>
        <span className="fpPrice">Starting from $250</span>
        <div className="fpRating">
          <button>9.4</button>
          <span>Wonderful</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://images.pexels.com/photos/189333/pexels-photo-189333.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
          className="fpImg"
        />
        <span className="fpName">
          Cheval Three Quays at The Tower of London
        </span>
        <span className="fpCity">Da Nang</span>
        <span className="fpPrice">Starting from $120</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
