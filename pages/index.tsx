import { useState } from 'react';

export default function Home() {
  const [list, setList] = useState([
    { id: 0, name: 'sample' },
    { id: 1, name: 'hoge' },
    { id: 2, name: 'fuga' },
  ]);
  const [listLabel, setListLabel] = useState('');

  const formChange = (e) => {
    setListLabel(e.target.value);
  };

  const addList = () => {
    if (listLabel !== '') {
      const newId = list.length;
      setList((list) => [...list, { id: newId, name: listLabel }]);
      setListLabel('');
    } else {
      alert('必須項目を入力の上、再度お試しください');
    }
  };

  const deleteList = (id) => {
    const filteredLIst = list.filter((list) => list.id !== id);
    setList(filteredLIst);
  };

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
        {list.length > 0 &&
          list.map((item) => (
            <p key={item.id}>
              {item.name}
              <span className="ml-4">
                <button onClick={() => deleteList(item.id)}>x</button>
              </span>
            </p>
          ))}
      </main>
    </>
  );
}
