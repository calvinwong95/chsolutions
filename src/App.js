import MainPage from "./pages/MainPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PageStateProvider } from "./context/PageStateContext";

function App() {
  return (
    <PageStateProvider>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </Router>
    </PageStateProvider>
  );
}

export default App;
