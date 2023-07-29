
import SidebarAndHeader from './components/Sidebar';
import HeroText from './components/HeroText';
import Features from './components/Features';
import Languages from './components/Languages';
import Footer from "./components/Footer"
import Codespaces from './components/Codespaces';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { motion } from 'framer-motion';
import Preloader from './components/Preloader';
function App() {


  return (

    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 1 }}
    >
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<SidebarAndHeader>
          <Preloader/>
            <HeroText />
            <Features />
            <Languages />
            <Footer />
          </SidebarAndHeader>} />
          <Route path="/code/:lang" element={<><Codespaces /><Footer /></>} />
          <Route path='*' element={<h1>Error 404</h1>}></Route>
        </Routes>
      </BrowserRouter>
    </motion.div>
  )
}

export default App
