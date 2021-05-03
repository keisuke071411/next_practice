import React, { FC } from 'react';

type Props = {
  list: {
    id: number;
    name: string;
  }[];
  removeItem: (id: number) => void;
};

const ListItem: FC<Props> = ({ list, removeItem }) => {
  return (
    <ul className="px-4">
      {list.length ? (
        list.map((item) => (
          <li key={item.id} className="flex">
            <p className="mr-4">{item.name}</p>
            <button onClick={() => removeItem(item.id)}>x</button>
          </li>
        ))
      ) : (
        <p>No Task</p>
      )}
    </ul>
  );
};

export default React.memo(ListItem);
