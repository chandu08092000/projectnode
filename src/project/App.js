import { Routes,Route } from "react-router-dom";
import About from "./components/About";
import Home from './components/Home';
import Layout from "./components/Layout";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Layout/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Contact' element={<Contact/>}/>
      </Routes>
    </div>
  );
}

export default App;
