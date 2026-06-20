import Home from "../Home";
import About from "../About";
import Contact from "../Contact";
import Pricing from "../Pricing";
import Services from "../Services";
import RequestQuote from "../RequestQuote";
import PolicyPopup from "./PolicyPopup";

function PageShell({ children }) {
  return (
    <>
      {children}
      <PolicyPopup />
    </>
  );
}

function App() {
  if (window.location.pathname === "/about") {
    return <PageShell><About /></PageShell>;
  }

  if (window.location.pathname === "/services") {
    return <PageShell><Services /></PageShell>;
  }

  if (window.location.pathname === "/contact") {
    return <PageShell><Contact /></PageShell>;
  }

  if (window.location.pathname === "/pricing") {
    return <PageShell><Pricing /></PageShell>;
  }

  if (window.location.pathname === "/request-quote") {
    return <PageShell><RequestQuote /></PageShell>;
  }

  return <PageShell><Home /></PageShell>;
}

export default App;
