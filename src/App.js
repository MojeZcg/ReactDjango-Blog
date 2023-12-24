import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import store from "store";
import { Provider } from "react-redux";

import Error404 from "containers/errors/Error404";
import Home from "containers/pages/Home";
import About from "containers/pages/About";
import Contact from "containers/pages/Contact";
import Blog from "containers/pages/Blog";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          {/* Error404 Display */}
          <Route path="*" element={<Error404 />} />

          {/* Page Displays */}
          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
