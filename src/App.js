import { Trans } from './styles/style';
import {useEffect, useState} from 'react';

function App() {
  const [options, setOptions] = useState([])
  const [to, setTo]=useState("");
  const [from, setFrom]=useState("");
  const [input, setInput]=useState("");
  const [output, setOutput]=useState("");
  const axios = require('axios').default;

  useEffect(()=>{
    axios.get('https://libretranslater.de/languages',
    {headers:{'accept':'application/json'}}).then(res=>{
      console.log(res.data);
      setOptions(res.data);
    })
  })


  return ( <Trans>  
    <div className="App">
     
     From:
     <select>
     {options.map(opt=>  <option value={opt.code} >{opt.name}
     </option>)}
     </select>
     to:

     <select>
     {options.map(opt=> <option value={opt.code}>{opt.name}
     </option>)}
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
