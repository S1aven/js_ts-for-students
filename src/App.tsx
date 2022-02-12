import React from 'react';
import './App.css';

function App() {

  const names = ["dimych", "sveta", "katya", "victor", "ignat"]
  const users = [
    {
      id: 1,
      name: "dimych"
    },
    {
      id: 2,
      name: "sveta"
    },
    {
      id: 3,
      name: "katya"
    },
    {
      id: 4,
      name: "victor"
    },
    {
      id: 5,
      name: "ignat"
    }
  ]
  const liElement = users.map(u => <li key={u.id}>{u.name}</li>)

  return (
    <div className="App">
      {liElement}
    </div>
  );
}

export default App;
