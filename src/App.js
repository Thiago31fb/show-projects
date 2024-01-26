import {
  BrowserRouter as Router,
  Route,
  Routes,
  // Navigate,
} from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import Projetos from "./pages/Projetos";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import DetalhesProjeto from "./pages/DetalhesProjeto";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />

        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projetos" element={<Projetos />} />
            <Route path="/projetos/:id" element={<DetalhesProjeto />} />
            <Route path="/contato" element={<Contact/>} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
    // <div className="App">
    //   <Home />
    // </div>
  );
}

export default App;
