import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import Catalog from "./components/Catalog/Catalog";
import Footer from "./components/Footer/Footer";
import SaibaMais from "./pages/SaibaMais/SaibaMais";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <LandingPage />
              <Catalog />
              <Footer />
            </>
          }
        />
        <Route path="/saiba-mais" element={<SaibaMais />} />
      </Routes>
    </Router>
  );
}

export default App;
