import React from 'react';

export type CardProps = {
  title: string;
  description: string;
  typesInfo: Array<string | number | boolean | React.ReactNode>;
};

export type IterableNode =
  | string
  | number
  | boolean
  | React.ReactElement<any, string | React.JSXElementConstructor<any>>
  | Iterable<React.ReactNode>
  | React.ReactPortal
  | null
  | undefined;

const Card = ({ title, description, typesInfo }: any) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        {typesInfo.map((i: IterableNode, _id: React.Key | null | undefined) => (
          <span
            key={_id}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >
            {i}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Card;
