import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Recipe from "./components/pages/Recipe";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import Auth from "./components/pages/Auth";
import Footer from "./components/layout/Footer";


const App = () => {
  const location = useLocation();
  const isAuthPage = location.pathname === "/auth";
  

  return (
    <div className="min-h-screen">
      {!isAuthPage && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe" element={<Recipe />} />
        <Route path="/about" element={<About />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
      {!isAuthPage && <Footer />}
    </div>
  );
};

export default App;
