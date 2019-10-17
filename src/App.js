import React from 'react';
import "./Globalstyles.css";
import { Dropdown } from './components/Dropdown';

function App() {

  return (
    <div className="App">

      <h1 className="font-effect-fire-animation">Florida Man</h1>

        <div className="parent_container">
          <Dropdown />

        </div>
    </div>
  );
}
export default App;