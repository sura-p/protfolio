import "./App.css";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import NavBar from "./Components/NavBar";
import {Route, Routes} from "react-router-dom";
import Contact from "./pages/Contact";
import Project from "./pages/Project";
import Resume from "./pages/Resume";
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <About />
              <Footer />
            </>
          }
        ></Route>
        <Route
          path="/contact"
          element={
            <>
              <Contact />
              <Footer />
            </>
          }
        ></Route>
        <Route
          path="/projects"
          element={
            <>
              <Project />
              <Footer />
            </>
          }
        ></Route>
        <Route
          path="/resume"
          element={
            <>
              <Resume />
              <Footer />
            </>
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
