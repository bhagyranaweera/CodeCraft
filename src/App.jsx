import Home from "../Home";
import About from "../About";
import Contact from "../Contact";

function App() {
  if (window.location.pathname === "/about") {
    return <About />;
  }

  if (window.location.pathname === "/contact") {
    return <Contact />;
  }

  return <Home />;
}

export default App;
