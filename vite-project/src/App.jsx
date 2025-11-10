import { Routes, Route } from "react-router-dom";
import  Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/OurHistory.jsx";
import Contact from "./pages/Contacts.jsx";

/*************  ✨ Windsurf Command 🌟  *************/
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/ourhistory" element={<Services />} />
        <Route path="/contacts" element={<Contact />} />
      </Routes>
      <Footer/>
    </>
  );
}
/*******  64a12d03-cffc-4717-a7a2-534100959d76  *******/

export default App;

