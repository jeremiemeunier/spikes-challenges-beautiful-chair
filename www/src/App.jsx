import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";

// context
import ScrollProvider from "./context/ContextScroll";

// components
import Header from "./components/Header";

// pages
import Error404 from "./pages/error/Error404";
import Product from "./pages/Product";

const App = () => {
  return (
    <ScrollProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Product />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Router>
    </ScrollProvider>
  );
};

export default App;
