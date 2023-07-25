
import SidebarAndHeader from './components/Sidebar';
import HeroText from './components/HeroText';
import Features from './components/Features';
import Languages from './components/Languages';
import Footer from "./components/Footer"
import Codespaces from './components/Codespaces';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { motion } from 'framer-motion';
function App() {

  // const compileCode = async (e) => {

  //   e.preventDefault();
  //   const API_URL = 'http://localhost:5000';
  //   const Arr = [];
  //   try {
  //     const result = await axios.post(`${API_URL}/api`, code);
  //     Arr.push(result.data);
  //   }
  //   catch (e) {
  //     console.log(e.message)
  //   }
  //   ans = Arr.pop();
  //   console.log('Arr Pop  : ' + ans);
  // }


  return (
    <>
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{delay:1}}
    >
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<SidebarAndHeader>
            <HeroText />
            <Features />
            <Languages />
            <Footer />
          </SidebarAndHeader>} />
            <Route path="/code/:lang" element={<><Codespaces/><Footer/></>} />
          <Route path='*' element={<h1>Error 404</h1>}></Route>
        </Routes>
      </BrowserRouter>
      </motion.div>
      {/* <center>
      <textarea value={code} onChange={(e) => { setCode(e.target.value); }} name="code" cols="30" rows="10" placeholder='Write Code Here' />
      <button type='submit' onClick={compileCode}>Compile</button>
    </center> */}
    </>
  )
}

export default App
