import { resolvers } from "./resolvers.js";
import { makeExecutableSchema } from "graphql-tools";

const typeDefs = `
    type Query {
        getAllCharacters: [Character]
        getCharacter(id: Int!): Character
    }    
    type Character {
        name: String
        height: String
        mass: String
        hair_color: String
        skin_color: String
        eye_color: String
        birth_year: String
        gender: String
        films: [Film]
        created: String
        edited: String
        url: String
        homeworld: Planet
    }
    type Film {
        title: String
        episode_id: Int 
        opening_crawl: String
        director: String
        producer: String
        release_date: String
    }
    type Planet {
        name: String
        rotation_period: String
        orbital_period: String 
        diameter: String
        climate: String 
        gravity: String 
        terrain: String 
        surface_water: String 
        population: String
    }
`;

export default makeExecutableSchema({
  typeDefs: typeDefs,
  resolvers: resolvers,
});
