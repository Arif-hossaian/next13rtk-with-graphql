import { gql } from "@apollo/client";

export const getPokemonsQuery = gql`
  query Pokemon {
    pokemons(first:12){
      id
      name
      image
      classification
      fleeRate
      types
    }
  }
`