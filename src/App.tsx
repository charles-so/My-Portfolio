import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutPage from './pages/About';
import ExperiencesPage from './pages/Experiences';
import ProjectsPage from './pages/Projects';
import ContactPage from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" Component={AboutPage} />
          <Route path="/experiences" Component={ExperiencesPage} />
          <Route path="/projects" Component={ProjectsPage} />
          <Route path="/contact" Component={ContactPage} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
