
import { Route, Routes } from "react-router-dom";
import Footer from "./component/Footer";
import Navbar from "./component/Navbar";

import Home from "./pages/Home";
import Pagesing from "./pages/Pagesing";

function App() {
  return (
  <>
     <Navbar/>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pages" element={<Pagesing/>} />
    </Routes>
    <Footer/>
   
  </>
  );
}

export default App;
