import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const detailsPlanet = (props) => {
  const { store, actions } = useContext(Context);
  const { id } = useParams();

  useEffect(() => {
    actions.getPlanet(id);
  }, []);

  if (store.loading) {
    return <h2>Loading....</h2>;
  }

  return (
    <>
      {Object.entries(store.planet).length >= 1 && (
        <>
          <div className="container mb-3 mt-5">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={`https://starwars-visualguide.com/assets/img/planets/${store.planet.uid}.jpg`}
                  className="img-fluid rounded-start"
                  style={{ height: "100%", width: "340px" }}
                />
              </div>
              <div className="col-md-8">
                <div className="body text-center">
                  <h1>{store.planet.properties.name}</h1>
                  <br></br>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit per
                    posuere velit vitae tellus maecenas, montes fames eu semper
                    cum magnis nisi augue felis sagittis ullamcorper et.
                    Himenaeos taciti eleifend euismod est nunc orci curae
                    convallis enim a ante, urna tempus eros sem parturient
                    ultrices eu mattis aptent. Dapibus porttitor aptent ligula
                    sem phasellus semper facilisis, egestas natoque senectus
                    donec tellus cubilia, erat accumsan massa nibh himenaeos
                    tincidunt.
                  </p>
                  <br></br>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit per
                    posuere velit vitae tellus maecenas, montes fames eu semper
                    cum magnis nisi augue felis sagittis ullamcorper et.
                    Himenaeos taciti eleifend euismod est nunc orci curae
                    convallis enim a ante, urna tempus eros sem parturient
                    ultrices eu mattis aptent. Dapibus porttitor aptent ligula
                    sem phasellus semper facilisis, egestas natoque senectus
                    donec tellus cubilia, erat accumsan massa nibh himenaeos
                    tincidunt.
                  </p>
                </div>
              </div>
              <div>
                <hr></hr>
              </div>
            </div>
          </div>
          <div className="details text-center m-5">
            <div className="division">
              <div className="card-body">
                <h5 className="card-title">Name</h5>
                <p className="card-text">{store.planet.properties.name}</p>
              </div>
            </div>
            <div className="division">
              <div className="card-body">
                <h5 className="card-title">Climate</h5>
                <p className="card-text">{store.planet.properties.climate}</p>
              </div>
            </div>
            <div className="division">
              <div className="card-body">
                <h5 className="card-title">Population</h5>
                <p className="card-text">
                  {store.planet.properties.population}
                </p>
              </div>
            </div>
            <div className="division">
              <div className="card-body">
                <h5 className="card-title">Orbital Period</h5>
                <p className="card-text">
                  {store.planet.properties.orbital_period}
                </p>
              </div>
            </div>
            <div className="division">
              <div className="card-body">
                <h5 className="card-title">Rotation Period</h5>
                <p className="card-text">
                  {store.planet.properties.rotation_period}
                </p>
              </div>
            </div>
            <div className="division">
              <div className="card-body">
                <h5 className="card-title">Diameter</h5>
                <p className="card-text">{store.planet.properties.diameter}</p>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default detailsPlanet;
