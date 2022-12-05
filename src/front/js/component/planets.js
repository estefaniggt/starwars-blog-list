import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Planets = (props) => {
  const { store, actions } = useContext(Context);

  return (
    <div className="d-flex container m-5">
      <div className="card" style={{ width: "18rem" }}>
        <img
          src={`https://starwars-visualguide.com/assets/img/planets/${props.item.uid}.jpg`}
          className="card-img-top"
        />
        <div className="card-body">
          <h5 className="card-title">{props.item.properties.name}</h5>
          <div className="card-text">
            <p>
              <strong>Population:</strong> {props.item.properties.population}
              <br></br>
              <strong>Terrain: </strong>
              {props.item.properties.terrain}
              <br></br>
              <strong>Diameter: </strong>
              {props.item.properties.diameter}
            </p>
          </div>
          <div>
            <Link
              to={`/planet/${props.item.uid}`}
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
