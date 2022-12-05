import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.css";

export const Vehicles = (props) => {
  const { store, actions } = useContext(Context);

  return (
    <div className="d-flex container m-5">
      <div className="card" style={{ width: "18rem" }}>
        <img
          src={`https://starwars-visualguide.com/assets/img/vehicles/${props.item.uid}.jpg`}
          className="card-img-top"
        />
        <div className="card-body">
          <h5 className="card-title">{props.item.properties.name}</h5>
          <div className="card-text">
            <p>
              <strong>Model: </strong> {props.item.properties.model}
              <br></br>
              <strong>Class: </strong>
              {props.item.properties.vehicle_class}
              <br></br>
              <strong>Length: </strong>
              {props.item.properties.length}
            </p>
          </div>
          <div>
            <Link
              to={`/vehicle/${props.item.uid}`}
              className="btn btn-outline-info"
            >
              Learn more!
            </Link>
            <button
              type="button"
              className="btn btn-outline-warning yellow"
              onClick={(event) => actions.addFavorite(props.item.properties)}
            >
              <i
                className={
                  actions.isFavorite(props.item.properties.name) == undefined
                    ? "far fa-heart"
                    : "fas fa-heart"
                }
              ></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
