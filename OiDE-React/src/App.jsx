import { useState } from 'react'
import axios from 'axios'
import Navbar from './components/Navbar';
import Icon from './components/Icon';
import SidebarAndHeader from './components/Sidebar';
import HeroText from './components/HeroText';
import Features from './components/Features';
import Languages from './components/Languages';
function App() {

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


return (
  <>
<SidebarAndHeader>
<HeroText/>
<Features/>
<Languages/>
</SidebarAndHeader>
  {/* </div> */}
    {/* <center>
      <textarea value={code} onChange={(e) => { setCode(e.target.value); }} name="code" cols="30" rows="10" placeholder='Write Code Here' />
      <button type='submit' onClick={compileCode}>Compile</button>
    </center> */}
  </>
)
}

export default App
