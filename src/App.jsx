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
  const route = getRoute();

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

function getRoute() {
  if (window.location.hash) {
    return window.location.hash.replace("#", "") || "/";
  }

  const redirectedRoute = window.sessionStorage.getItem("codecraft-route");

  if (redirectedRoute) {
    window.sessionStorage.removeItem("codecraft-route");
    window.history.replaceState(null, "", `/CodeCraft${redirectedRoute}`);
    return redirectedRoute;
  }

  const pathname = window.location.pathname.replace(/\/$/, "") || "/";
  const projectPath = pathname.replace(/^\/CodeCraft/i, "") || "/";

  return projectPath;
}

export default App;
