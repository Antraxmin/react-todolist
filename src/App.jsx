import * as React from 'react';
import './App.css';

function App() {
  return (
    <main>
      <input type="text" onchange={(event)=>console.log(event.target.value)}/>
        <button>추가</button>
    </main>
  );
}

export default App;