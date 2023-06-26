'use client';
import Card from '@/components/Card';
import { getPokemonsQuery } from '@/graphql/getPokemonsQuery';
import { useQuery } from '@apollo/client';
import { Key, ReactNode, useEffect, useState } from 'react';
import { login } from '../redux/features/loginSlice';
import { useDispatch } from 'react-redux';
import { AppDispatch, useAppSelector } from '@/redux/store';
import Auth from '@/components/Auth';
import Loading from '@/components/Loading';

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
    phnNum: '',
    password: '',
  });
  const [displayAuth, setDisplayAuth] = useState(true);
  const [displayData, setDisplayData] = useState(false);
  const { data, loading, error } = useQuery(getPokemonsQuery);
  const dispatch = useDispatch<AppDispatch>();
  const auth = useAppSelector((state) => state.auth);

  const handleChange = (e: { target: { value: any; name: any } }) => {
    const value = e.target.value;
    setInputData({
      ...inputData,
      [e.target.name]: value,
    });
  };

  const validate = () => {
    return inputData.phnNum && inputData.password;
  };

  const handleClick = (e: any) => {
    e.preventDefault();
    if (validate()) {
      dispatch(login(inputData));
    }
  };

  useEffect(() => {
    if (auth.isAuth) {
      setDisplayAuth(false);
      setDisplayData(true);
    }
  }, [auth.isAuth]);

  if (loading) return <Loading />;
  if (error)
    return (
      <p className="text-red-500 text-center text-2xl font-bold mt-16">
        Oops! Something went wrong ....
      </p>
    );

  return (
    <main className="mx-auto max-w-screen-xl py-4 px-5">
      {displayAuth == true && displayData == false && (
        <Auth
          inputData={inputData}
          handleChange={handleChange}
          handleClick={handleClick}
          validate={validate}
        />
      )}
      {displayData == true && displayAuth == false && (
        <>
          <h1 className="text-2xl text-center mt-10 mb-10 font-bold">
            Displaying List of pokemons
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
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
        </>
      )}
    </main>
  );
}
