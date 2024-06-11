import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./components/home/Landing";
import NotFound from "./components/shared/NotFound";
import "./App.css";
import MainLayout from "./components/layouts/MainLayout";
import EventsPage from "./pages/events/page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<LandingPage />} />
          <Route path="/app" element={<LandingPage />} />
          <Route path="/events" element={<EventsPage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
