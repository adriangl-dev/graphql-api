import axios from "axios";

const responseFilms = (parent) => {
  const promises = parent.films.map(async (url) => {
    const response = await axios.get(url);
    return response.data;
  });
  return Promise.all(promises);
};
const responseSpecies = (parent) => {
  const promises = parent.species.map(async (url) => {
    const response = await axios.get(url);
    return response.data;
  });
  return Promise.all(promises);
};
const responseVehicles = (parent) => {
  const promises = parent.vehicles.map(async (url) => {
    const response = await axios.get(url);
    return response.data;
  });
  return Promise.all(promises);
};
const responseStarships = (parent) => {
  const promises = parent.starships.map(async (url) => {
    const response = await axios.get(url);
    return response.data;
  });
  return Promise.all(promises);
};
const responseCharacters = (parent) => {
  const promises = parent.residents.map(async (url) => {
    const response = await axios.get(url);
    return response.data;
  });
  return Promise.all(promises);
};
const responsePilots = (parent) => {
  const promises = parent.pilots.map(async (url) => {
    const response = await axios.get(url);
    return response.data;
  });
  return Promise.all(promises);
};
const responsePlanets = (parent) => {
  const promises = parent.planets.map(async (url) => {
    const response = await axios.get(url);
    return response.data;
  });
  return Promise.all(promises);
};

export const resolvers = {
  Query: {
    getAllCharacters: async () => {
      const response = await axios.get("https://swapi.dev/api/people/");
      return response.data.results;
    },
    getCharacter: async (_, { id }) => {
      const response = await axios.get(`https://swapi.dev/api/people/${id}/`);
      return response.data;
    },
    getAllPlanets: async () => {
      const response = await axios.get("https://swapi.dev/api/planets/");
      return response.data.results;
    },
    getPlanet: async (_, { id }) => {
      const response = await axios.get(`https://swapi.dev/api/planets/${id}/`);
      return response.data;
    },
    getAllFilms: async () => {
      const response = await axios.get("https://swapi.dev/api/films/");
      return response.data.results;
    },
    getFilm: async (_, { id }) => {
      const response = await axios.get(`https://swapi.dev/api/films/${id}/`);
      return response.data;
    },
    getAllSpecies: async () => {
      const response = await axios.get("https://swapi.dev/api/species/");
      return response.data.results;
    },
    getSpecie: async (_, { id }) => {
      const response = await axios.get(`https://swapi.dev/api/species/${id}/`);
      return response.data;
    },
    getAllVehicles: async () => {
      const response = await axios.get("https://swapi.dev/api/vehicles/");
      return response.data.results;
    },
    getVehicle: async (_, { id }) => {
      const response = await axios.get(`https://swapi.dev/api/vehicles/${id}/`);
      return response.data;
    },
    getAllStarships: async () => {
      const response = await axios.get("https://swapi.dev/api/vehicles/");
      return response.data.results;
    },
    getStarship: async (_, { id }) => {
      const response = await axios.get(`https://swapi.dev/api/vehicles/${id}/`);
      return response.data;
    }
  },
  Character: {
    homeworld: async (parent) => {
      const response = await axios.get(parent.homeworld);
      return response.data;
    },
    films: responseFilms,
    species: responseSpecies,
    vehicles: responseVehicles,
    starships: responseStarships
  },
  Planet: {
    residents: responseCharacters,
    films: responseFilms
  },
  Film: {
    characters: (parent) => {
      const promises = parent.characters.map(async (url) => {
        const response = await axios.get(url);
        return response.data;
      });
      return Promise.all(promises);
    },
    planets: responsePlanets,
    starships: responseStarships,
    vehicles: responseVehicles,
    species: responseSpecies
  },
  Specie: {
    people: (parent) => {
      const promises = parent.people.map(async (url) => {
        const response = await axios.get(url);
        return response.data;
      });
      return Promise.all(promises);
    },
    films: responseFilms,
  },
  Vehicle: {
    pilots: responsePilots,
    films: responseFilms
  },
  Starship: {
    pilots: responsePilots,
    films: responseFilms
  }
};
