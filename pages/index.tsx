import { useState, useEffect, useCallback } from 'react';
import ListItem from '../components/ListItem';

export default function Home() {
  const [list, setList] = useState([
    { id: 0, name: 'sample' },
    { id: 1, name: 'hoge' },
    { id: 2, name: 'fuga' },
  ]);
  const [listLabel, setListLabel] = useState('');
  const [listId, setListId] = useState(0);

  useEffect(() => {
    setListId(list.length);
  }, []);

  const formChange = (e) => {
    setListLabel(e.target.value);
  };

  const addList = () => {
    if (listLabel !== '') {
      setListId(listId + 1);
      const newId = listId;

      setList((list) => [...list, { id: newId, name: listLabel }]);
      setListLabel('');
    } else {
      alert('必須項目を入力の上、再度お試しください');
    }
  };

  const removeItem = useCallback(
    (id) => {
      const filteredLIst = list.filter((list) => list.id !== id);
      setList(filteredLIst);
    },
    [list],
  );

  return (
    <>
      <h1 className="text-center text-teal-500 text-2xl py-4">Hello world!!!</h1>
      <main className="px-4">
        <input
          value={listLabel}
          onChange={formChange}
          type="text"
          className="border-solid border-4 focus:outline-none focus:ring focus:border-blue-300 ..."
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-12"
          onClick={addList}
        >
          追加する
        </button>
      </main>
      <ListItem list={list} removeItem={removeItem} />
    </>
  );
}
