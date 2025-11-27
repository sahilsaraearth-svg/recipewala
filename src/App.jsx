import { Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Page from "./components/Page";
import Recipe from "./components/pages/Recipe";
import About from "./components/pages/About";

const App = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Page />} />
        <Route path="/recipe" element={<Recipe />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;
