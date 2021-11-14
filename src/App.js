import { Trans } from './styles/style';
import {useState} from 'react';

function App() {
  const [to, setTo]=useState("");
  const [from, setFrom]=useState("");
  const [input, setInput]=useState("");
  const [output, setOutput]=useState("");
  const axios = require('axios').default;


  return ( <Trans>  
    <div className="App">
     
     From:
     <select>
       <option value="1">
        1
       </option>
       
       <option value="2">
        2
       </option>
     </select>
     to:
     <select>
       <option value="1">
        1
       </option>
       
       <option value="2">
        2
       </option>
     </select>
    <div>
      <textarea cols="%0" rows="8"></textarea>
    </div>
    <div>
      <textarea cols="%0" rows="8"></textarea>
    </div>
    <div>
      <button cols="%0" row="8">translater</button>
    </div>
   
   </div>
    </Trans>
  );
}

export default App;
