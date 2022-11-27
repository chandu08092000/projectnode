import { Routes,Route } from "react-router-dom";
import About from "./components/About";
import Home from './components/Home';
import Layout from "./components/Layout";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Login from "./components/Login";

function App() {
  return (
    <div>
      <Layout/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path="/Services" element={<Services/>}/>
        <Route path="/Login" element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
