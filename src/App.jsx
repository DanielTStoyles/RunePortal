/** @format */
import { QueryClient, QueryClientProvider } from "react-query";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import AuthProvider from "./context/AuthProvider";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProfilePage from "./pages/ProfilePage";
import LandingPage from "./pages/LandingPage";
import AdventureLogPage from "./pages/AdventureLogPage";
import GeWatchlist from "./pages/GeWatchlist";
import GeResultsPage from "./pages/GeResultsPage";
import GeSearchPage from "./pages/GeSearchPage";
import NotFoundPage from "./pages/ErrorPage";
import OopsComponent from "./components/reDirectPages/OopsComponent";

const queryClient = new QueryClient();

const apiBaseUrl = import.meta.env.VITE_APP_API;
console.log(apiBaseUrl);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/home" element={<LandingPage />} />
            <Route path="/" element={<LandingPage />} />
            <Route path="/results/:itemName" element={<GeResultsPage />} />
            <Route path="/geSearch" element={<GeSearchPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/adventureLogPage" element={<AdventureLogPage />} />
            <Route path="/geWatchlist" element={<GeWatchlist />} />
            <Route path="/oops" element={<OopsComponent />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
