import { useState } from 'react'
import axios from 'axios'
function App() {

  const [num, setNum] = useState(0)
  const [code, setCode] = useState('')

  const handleClick = (e) => {
    e.preventDefault();
    setNum(num + 1)

  }

  const compileCode = async (e) => {

    e.preventDefault();
    const API_URL = 'http://localhost:5000';
    const Arr = [];
    try {
      const result = await axios.post(`${API_URL}/api`,code);
      Arr.push(result.data);
    }
    catch (e) {
      console.log(e.message)
    }
    ans = Arr.pop();
    console.log('Arr Pop  : ' + ans);
  }

  export default API

}

return (
  <>
    <center>
      <textarea value={code} onChange={(e) => { setCode(e.target.value); }} name="code" cols="30" rows="10" placeholder='Write Code Here' />
      <button type='submit' onClick={compileCode}>Compile</button>
    </center>
  </>
)
}

export default App
