import { useState } from "react";
import "./App.scss";
import ScrollProvider from "./context/ContextScroll";

function App() {
  const [count, setCount] = useState(0);

  return (
    <ScrollProvider>
      <Router>
        <Header />
        <Toast />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer />
      </Router>
    </ScrollProvider>
  );
}

export default App;
