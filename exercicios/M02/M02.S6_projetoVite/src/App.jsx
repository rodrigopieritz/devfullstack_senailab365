import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";
import { ContactPage } from "./pages/ContactPage/ContactPage";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";
import { Products } from "./pages/Products/Products";
import { Faq } from "./pages/FAQ/FAQ";
import { BannerProvider } from "./context/BannerContext/BannerContext.jsx";

function App() {
  return (
   
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="products" element={<Products />} />
        <Route path="faq" element={<Faq />} />
      </Routes>
    </Router>
    
  );
}

export default App;
