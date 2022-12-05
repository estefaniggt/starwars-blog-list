import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Cards = (props) => {
  const { store, actions } = useContext(Context);

  return (
    <div className="d-flex container m-5">
      <div className="card" style={{ width: "18rem" }}>
        <img
          src={`https://starwars-visualguide.com/assets/img/characters/${props.item.uid}.jpg`}
          className="card-img-top"
        />
        <div className="card-body">
          <h5 className="card-title">{props.item.properties.name}</h5>
          <div className="card-text">
            <p>
              <strong>Gender:</strong> {props.item.properties.gender}
              <br></br>
              <strong>Hair color:</strong> {props.item.properties.hair_color}
              <br></br>
              <strong>Eyes color:</strong> {props.item.properties.eye_color}
            </p>
          </div>
          <div>
            <Link
              to={`/character/${props.item.uid}`}
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
