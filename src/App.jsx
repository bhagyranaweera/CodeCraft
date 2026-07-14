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
  const route = window.location.hash.replace("#", "") || "/";

  if (route === "/about") {
    return <PageShell><About /></PageShell>;
  }

  if (route === "/services") {
    return <PageShell><Services /></PageShell>;
  }

  if (route === "/contact") {
    return <PageShell><Contact /></PageShell>;
  }

  if (route === "/pricing") {
    return <PageShell><Pricing /></PageShell>;
  }

  if (route === "/request-quote") {
    return <PageShell><RequestQuote /></PageShell>;
  }

  return <PageShell><Home /></PageShell>;
}

export default App;
