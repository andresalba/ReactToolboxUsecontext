import './App.css';
import { Fragment, useState } from 'react';
import Child1 from './Child1';
import Child3 from './Child3';
import MsgConstext, {mensajes} from './msg-context';

function App() {

  const [ men, setMen] = useState(mensajes.msg1);
  
  const changeMsg = () => {
    men === mensajes.msg1
      ? setMen(mensajes.msg2)
      : setMen(mensajes.msg1);
  }

  return (
      <div className="App">
        <MsgConstext.Provider value={ men }>
            <Child1 />
            <Child3 />
        </MsgConstext.Provider>
        <button onClick={changeMsg} className="btn">cambio</button>
      </div>
  );
}

export default App;
