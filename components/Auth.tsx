import React from 'react';
import clsx from 'clsx';

const Auth = ({ inputData, handleChange, handleClick, validate }: any) => {
  return (
    <div className="mx-auto max-w-screen-sm mt-10 md:mt-16 lg:mt-16">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="input-label">
            Phone number
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="01x-xxx-xxx-xx"
            name="phnNum"
            value={inputData.phnNum}
            onChange={handleChange}
          />
        </div>
        <div className="mb-6">
          <label className="input-label">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="******************"
            name="password"
            value={inputData.password}
            onChange={handleChange}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            onClick={handleClick}
            className={clsx(
              !validate()
                ? 'bg-gray-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                : 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
            )}
            disabled={!validate()}
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
};

export default Auth;
