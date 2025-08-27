import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"
import HomePage from "./Pages/HomePage"
import AboutPage from "./Pages/AboutPage"
import Footer from "./components/Footer";
import ContactPage from "./Pages/ContactPage";
import Service_repair from "./Pages/Service_repair";
import Service_TT from "./Pages/Service_TT";
import Service_Reconditional from "./Pages/Service_Reconditional";
import Service_Annual from "./Pages/Service_Annual";
import Industries_Mobile from "./Pages/Industries_Mobile";
import Industries_Mining from "./Pages/Industries_Mining";
import Industries_Agriculture from "./Pages/Industries_Agriculture";
import Industries_Defence from "./Pages/Industries_Defence";
import Industries_Marine from "./Pages/Industries_Marine";
import Product from "./Pages/Product";

function App() {
  
  return (
    <>
   
    <Router>
       <Navbar/>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/about' element={<AboutPage/>}/>
      <Route path='/contact' element={<ContactPage/>}/>
      <Route path='/service_repair' element={<Service_repair/>}/>
      <Route path='/technical_training' element={<Service_TT/>}/>
      <Route path='/units' element={<Service_Reconditional/>}/>
      <Route path='/annual_contracts' element={<Service_Annual/>}/>
      <Route path='/mobile_hydraulics' element={<Industries_Mobile/>}/>
      <Route path='/mining_power_generation' element={<Industries_Mining/>}/>
      <Route path='/agriculture_machines' element={<Industries_Agriculture/>}/>
      <Route path='/defence_aviation' element={<Industries_Defence/>}/>
      <Route path='/marine_offshore' element={<Industries_Marine/>}/>
      <Route path='/product' element={<Product/>}/>
      </Routes>
      <Footer />
    </Router>,

    </>
  )
}

export default App
