import { gql } from "@apollo/client";

export const getPokemonsQuery = gql`
  query Pokemon {
    pokemons(first:15){
      name
      classification
      types
    }
  }
`