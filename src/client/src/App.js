import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Stocks from "./Components/Stocks";
import DetailStock from "./Components/DetailStock";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import './App.css'
import Translate from "./Components/Translate";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/stocks/:name" element={<DetailStock/>}/>
        <Route path="/translate" element={<Translate/>}/>
        <Route path="/aboutus" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/" element={<Header/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
