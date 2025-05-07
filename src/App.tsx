import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/layout";
import HomePage from "./pages/HomePage";
import InboxPage from "./pages/InboxPage";
import CalendarPage from "./pages/CalenderPage";
import SearchPage from "./pages/SearchPage";
import SettingsPage from "./pages/SettingsPage";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/inbox" element={<InboxPage />} />
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;