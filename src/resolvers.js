import axios from "axios";

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
  },
  Character: {
    films: (parent) => {
      const promises = parent.films.map(async (url) => {
        const response = await axios.get(url);
        return response.data;
      });
      return Promise.all(promises);
    },
    homeworld: async (parent) => {
      const response = await axios.get(parent.homeworld);
      return response.data;
    },
  },
};
