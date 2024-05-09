import { useState } from "react";
import resto from "../MockData/data";

const Card = (props) => {
  return (
    <div className="card">
      <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/x4uyxvihmg8qa3pddkgf"></img>
      <h3>{props.jhc.name}</h3>
      <p>
        {props.jhc.ratings}
        ratings
      </p>
      <p>{props.jhc.location}</p>
      <p>
        {props.jhc.deliveryTime}
        min
      </p>
    </div>
  );
};

const CardFlex = () => {
  const [data, setData] = useState(resto);

  return (
    <div>
      <div className="filter-container">
        <div className="filter-btns">
          <button
            onClick={() => {
              const filter = data.filter((x) => {
                return x.ratings > 4;
              });

              setData(filter);
            }}
          >
            above 4
          </button>
          <button
            onClick={() => {
              const costFilter = data.filter((x) => {
                return x.cost < 300;
              });
              setData(costFilter);
            }}
          >
            cost less than 300
          </button>
          <button
            onClick={() => {
              const middle = data.filter((x) => {
                return x.cost > 300 && x.cost < 500;
              });
              setData(middle);
            }}
          >
            cost between 300 and 500
          </button>
        </div>
        <div className="search-section">
          <input type="text" placeholder="type your dish"></input>
          <button>search</button>
        </div>
      </div>
      <div className="card-flex">
        {data.map((x) => {
          return <Card jhc={x} />;
        })}{" "}
      </div>
    </div>
  );
};

const Middle = () => {
  return (
    <div className="middle">
      <CardFlex />
    </div>
  );
};

export default Middle;
