'use client';
import Card from '@/components/Card';
import { getPokemonsQuery } from '@/graphql/getPokemonsQuery';
import { useQuery } from '@apollo/client';
import { Key, ReactNode, useState } from 'react';
import {login, logOut} from '../redux/features/loginSlice'
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/redux/store';

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
  const [inputData, setInputData] = useState({
    phnNum:'',
    password:''
  })
  const [displayAuth, setDisplayAuth] = useState(false);
  const [displayData, setDisplayData] = useState(false);
  const { data, loading, error } = useQuery(getPokemonsQuery);
  const dispatch = useDispatch<AppDispatch>()

  if (loading) return <p className="text-black">Loading ....</p>;
  if (error)
    return <p className="text-black">Oops! Something went wrong ....</p>;

  return (
    <main className=" mx-auto max-w-screen-xl py-4 px-5">
      <div className="w-full max-w-xs">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Phone number
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
            />
            <p className="text-red-500 text-xs italic">
              Please choose a password.
            </p>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Sign In
            </button>
          </div>
        </form>
        <p className="text-center text-gray-500 text-xs">
          &copy;2020 Acme Corp. All rights reserved.
        </p>
      </div>
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
