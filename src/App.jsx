import Home from "../Home";
import About from "../About";
import Contact from "../Contact";
import Pricing from "../Pricing";
import Services from "../Services";
import RequestQuote from "../RequestQuote";

function App() {
  if (window.location.pathname === "/about") {
    return <About />;
  }

  if (window.location.pathname === "/services") {
    return <Services />;
  }

  if (window.location.pathname === "/contact") {
    return <Contact />;
  }

  if (window.location.pathname === "/pricing") {
    return <Pricing />;
  }

  if (window.location.pathname === "/request-quote") {
    return <RequestQuote />;
  }

  return <Home />;
}

export default App;
