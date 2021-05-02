import React, { FC } from 'react';

interface Props {
  id: number;
  name: string;
}

const ListItem: FC<Props> = React.memo(({ list, deleteList }) => {
  return (
    list.length > 0 &&
    list.map((item) => (
      <p key={item.id}>
        {item.name}
        <span className="ml-4">
          <button onClick={() => deleteList(item.id)}>x</button>
        </span>
      </p>
    ))
  );
});

ListItem.displayName = 'ListItem';

export default ListItem;
