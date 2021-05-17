import { resolvers } from "./resolvers.js";
import { makeExecutableSchema } from "graphql-tools";

const typeDefs = `
    type Query {
        getAllCharacters: [Character]
        getCharacter(id: Int!): Character
        getAllPlanets: [Planet]
        getPlanet(id: Int!): Planet
        getAllFilms: [Film]
        getFilm(id: Int!): Film
        getAllSpecies: [Specie]
        getSpecie(id: Int!): Specie
        getAllVehicles: [Vehicle]
        getVehicle(id: Int!): Vehicle
        getAllStarships: [Starship]
        getStarship(id: Int!): Starship
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
        homeworld: Planet
        films: [Film]
        species: [Specie]
        vehicles: [Vehicle]
        starships: [Starship]
    }
    type Film {
        title: String
        episode_id: Int 
        opening_crawl: String
        director: String
        producer: String
        release_date: String
        characters: [Character]
        planets: [Planet]
        starships: [Starship]
        vehicles: [Vehicle]
        species: [Specie]
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
        residents: [Character]
        films: [Film]
    }
    type Specie {
        name: String 
        classification: String 
        designation: String 
        average_height: String 
        skin_colors: String
        hair_colors: String 
        eye_colors: String
        average_lifespan: String 
        language: String
        people: [Character]
        films: [Film]
    }
    type Vehicle {
        name: String 
        model: String 
        manufacturer: String 
        cost_in_credits: String 
        length: String
        max_atmosphering_speed: String 
        crew: String
        passengers: String 
        cargo_capacity: String 
        consumables: String 
        vehicle_class: String 
        pilots: [Character]
        films: [Film]
    }
    type Starship {
        name: String 
        model: String 
        manufacturer: String 
        cost_in_credits: String 
        length: String 
        max_atmosphering_speed: String 
        crew: String
        passengers: String 
        cargo_capacity: String 
        consumables: String 
        hyperdrive_rating: String 
        MGLT: String
        starship_class: String
        pilots: [Character]
        films: [Film]
    }
`;

export default makeExecutableSchema({
  typeDefs: typeDefs,
  resolvers: resolvers,
});
