'use client';
import Card from '@/components/Card';
import { getPokemonsQuery } from '@/graphql/getPokemonsQuery';
import { useQuery } from '@apollo/client';
import { Key, ReactNode } from 'react';

export type Pokemon = {
  types: any[];
  name: string;
  classification: string;
};

export type CardProps = {
  title: string;
  description: string;
  typesInfo: Pokemon['types'];
};

export type IterableNode = ReactNode | null | undefined;

export default function Home() {
  const { data, loading, error } = useQuery(getPokemonsQuery);

  if (loading) return <p className="text-black">Loading ....</p>;
  if (error)
    return <p className="text-black">Oops! Something went wrong ....</p>;
    
  return (
    <main className=" mx-auto max-w-screen-xl py-4 px-5">
      <div className="grid grid-cols-3 gap-10">
        {data.pokemons.map((pokemon: Pokemon, index: Key) => (
          <div key={index}>
            <Card
              title={pokemon.name}
              description={pokemon.classification}
              typesInfo={pokemon.types}
            />
          </div>
        ))}
      </div>
    </main>
  );
}
