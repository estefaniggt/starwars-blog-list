const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      loading: true,
      message: null,
      characteristics: [],
      character: {},
      planets: [],
      planet: {},
      vehicles: [],
      vehicle: {},
      favorites: [],
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
    },
    actions: {
      getCharacteristics: () => {
        const store = getStore();
        for (let index = 1; index <= 10; index++) {
          const apiURL = `https://www.swapi.tech/api/people/${index}`;
          fetch(apiURL)
            .then((Response) => {
              if (Response.ok) {
                return Response.json();
              }
              throw new Error("Ha ocurrido un error");
            })
            .then((data) => {
              store.characteristics.push(data.result);
              setStore({ characteristics: store.characteristics });
            })
            .catch((error) => console.log(error));
        }
      },

      getCharacter: async (id) => {
        const store = getStore();
        setStore({
          ...store,
          loading: true,
        });
        const apiURL = `https://www.swapi.tech/api/people/${id}`;
        const result = await fetch(apiURL);
        const data = await result.json();

        store.character = {
          ...data.result,
        };
        setStore({
          ...store,
          character: store.character,
        });
        setStore({
          ...store,
          loading: false,
        });
      },

      getPlanets: () => {
        const store = getStore();

        store.loading = true;
        for (let index = 1; index <= 10; index++) {
          const apiURL = `https://www.swapi.tech/api/planets/${index}`;
          fetch(apiURL)
            .then((Response) => {
              if (Response.ok) {
                return Response.json();
              }
              throw new Error("Ha ocurrido un error");
            })
            .then((data) => {
              store.planets.push(data.result);
              setStore({ planets: store.planets });
            })
            .catch((error) => console.log(error));
        }
        store.loading = false;
      },

      getPlanet: async (id) => {
        const store = getStore();
        setStore({
          ...store,
          loading: true,
        });
        const apiURL = `https://www.swapi.tech/api/planets/${id}`;
        const result = await fetch(apiURL);
        const data = await result.json();

        store.planet = {
          ...data.result,
        };
        setStore({
          ...store,
          planet: store.planet,
        });
        setStore({
          ...store,
          loading: false,
        });
      },

      getVehicles: async () => {
        const store = getStore();
        const { getVehicle } = getActions();
        const apiURL = `https://www.swapi.tech/api/vehicles`;
        const result = await fetch(apiURL);
        const data = await result.json();
        const rawVehicles = data.results;

        rawVehicles.map(async (vehicle) => {
          const fetchVehicle = await getVehicle(vehicle.uid);

          setStore({
            ...store,
            vehicles: [...store.vehicles, fetchVehicle],
          });
        });
      },

      getVehicle: async (id) => {
        const store = getStore();
        setStore({
          ...store,
          loading: true,
        });
        const apiURL = `https://www.swapi.tech/api/vehicles/${id}`;
        const result = await fetch(apiURL);
        const data = await result.json();

        store.vehicle = {
          ...data.result,
        };
        setStore({
          ...store,
          vehicle: store.vehicle,
        });
        setStore({
          ...store,
          loading: false,
        });

        return store.vehicle;
      },
      addFavorite: (item) => {
        const store = getStore();
        const actions = getActions();

        if (actions.isFavorite(item.name)) {
          const newFavorites = store.favorites.filter((favt) => {
            return favt.name !== item.name;
          });
          setStore({
            ...store,
            favorites: newFavorites,
          });
          // guardar en localStorage, bitch!
        } else {
          setStore({
            ...store,
            favorites: [...store.favorites, item],
          });
        }
      },

      isFavorite: (name) => {
        const store = getStore();
        return store.favorites.find((favorite) => {
          return favorite.name == name;
        });
      },

      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },

      getMessage: async () => {
        try {
          // fetching data from the backend
          const resp = await fetch(process.env.BACKEND_URL + "/api/hello");
          const data = await resp.json();
          setStore({ message: data.message });
          // don't forget to return something, that is how the async resolves
          return data;
        } catch (error) {
          console.log("Error loading message from backend", error);
        }
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
    },
  };
};

export default getState;
