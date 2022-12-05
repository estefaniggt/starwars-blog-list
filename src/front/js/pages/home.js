import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Cards } from "../component/cards";
import { Planets } from "../component/planets";
import { Vehicles } from "../component/vehicles";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container ">
      <h2 className="text-danger mt-5">Characters</h2>
      <div className="carousel">
        <div className="characters">
          {store.characteristics.map((characteristic) => {
            return <Cards item={characteristic} key={characteristic._id} />;
          })}
        </div>
      </div>

      <h2 className="text-danger mt-5">Planets</h2>
      <div className="carousel">
        <div className="planets">
          {store.planets.map((planet) => {
            return <Planets item={planet} key={planet._id} />;
          })}
        </div>
      </div>

      <h2 className="text-danger mt-5">Vehicles</h2>
      <div className="carousel">
        <div className="vehicles">
          {store.vehicles.map((vehicle) => {
            return <Vehicles item={vehicle} key={vehicle._id} />;
          })}
        </div>
      </div>
    </div>
  );
};
