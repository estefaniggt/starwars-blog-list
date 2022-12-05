import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const detailsCharacter = (props) => {
  const { store, actions } = useContext(Context);
  const { id } = useParams();

  useEffect(() => {
    actions.getCharacter(id);
  }, []);

  if (store.loading) {
    return <h2>Loading....</h2>;
  }

  return (
    <>
      {Object.values(store.character).length >= 1 && (
        <>
          <div className="container mb-3 mt-5">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={`https://starwars-visualguide.com/assets/img/characters/${store.character.uid}.jpg`}
                  className="img-fluid rounded-start"
                  style={{ height: "100%", width: "340px" }}
                />
              </div>
              <div className="col-md-8">
                <div className="body text-center">
                  <h1>{store.character.properties.name}</h1>
                  <br></br>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit
                    imperdiet non, et suspendisse nisl cras rhoncus orci conubia
                    aliquet. Justo rhoncus est aptent pellentesque ornare class
                    vestibulum leo bibendum, quis orci porttitor eget malesuada
                    ridiculus turpis nisi, semper vulputate vivamus sem et
                    tristique interdum natoque. Platea euismod gravida ultrices
                    arcu vestibulum primis condimentum risus natoque ac sapien
                    mollis, torquent purus egestas justo aptent libero dictum
                    auctor faucibus curabitur tellus urna, donec habitasse
                    facilisi ultricies sagittis semper integer iaculis ridiculus
                    aliquam placerat.
                  </p>
                  <br></br>
                  <p className="card-text">
                    Natoque scelerisque taciti inceptos enim tortor venenatis,
                    nisi sociis luctus aliquam himenaeos est, mattis rhoncus
                    etiam interdum placerat. Habitasse tempus convallis ornare
                    scelerisque quis aliquet, nunc sociis mattis iaculis odio
                    egestas rhoncus, diam facilisi nec cubilia lacus. Placerat
                    etiam facilisi nisi vehicula ornare faucibus mattis
                    tincidunt congue dis habitasse hendrerit, turpis semper dui
                    luctus ligula quis curabitur fusce orci gravida quam.
                  </p>
                  <br></br>
                  <p className="card-text">
                    Auctor tempus vivamus dignissim aptent morbi ligula vehicula
                    leo volutpat scelerisque, laoreet diam tortor dui viverra
                    commodo taciti hendrerit magna, semper malesuada enim per
                    tincidunt vitae urna montes sociis.
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
                <p className="card-text">{store.character.properties.name}</p>
              </div>
            </div>
            <div className="division">
              <div className="card-body">
                <h5 className="card-title">Heigth</h5>
                <p className="card-text">{store.character.properties.heigth}</p>
              </div>
            </div>
            <div className="division">
              <div className="card-body">
                <h5 className="card-title">Hair Color</h5>
                <p className="card-text">
                  {store.character.properties.hair_color}
                </p>
              </div>
            </div>
            <div className="division">
              <div className="card-body">
                <h5 className="card-title">Skin Color</h5>
                <p className="card-text">
                  {store.character.properties.skin_color}
                </p>
              </div>
            </div>
            <div className="division">
              <div className="card-body">
                <h5 className="card-title">Eye Color</h5>
                <p className="card-text">
                  {store.character.properties.eye_color}
                </p>
              </div>
            </div>
            <div className="division">
              <div className="card-body">
                <h5 className="card-title">Birth Year</h5>
                <p className="card-text">
                  {store.character.properties.birth_year}
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default detailsCharacter;
