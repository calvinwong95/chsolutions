// import MainPage from "./pages/MainPage";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { PageStateProvider } from "./context/PageStateContext";
import Home from "./pages";

function App() {
  return (
    <PageStateProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </PageStateProvider>
  );
}

export default App;
