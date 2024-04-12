import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import NotFound from "./pages/NotFound";

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/website" element={<Home />} />
                <Route path="/website/projects" element={<Projects />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
      </Router>
    );
}

export default App;