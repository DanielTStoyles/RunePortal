/** @format */
import { QueryClient, QueryClientProvider } from "react-query";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import AuthProvider from "./context/AuthProvider";
import Login from "./pages/Login";
import Register from "./pages/Register";
import GrandExchange from "./pages/GrandeExchange";
import ProfilePage from "./pages/ProfilePage";
import LandingPage from "./pages/LandingPage";
import AdventureLogPage from "./pages/AdventureLogPage";
import GeWatchlist from "./pages/GeWatchlist";

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
            <Route path="/ge" element={<GrandExchange />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/adventureLogPage" element={<AdventureLogPage />} />
            <Route path="/geWatchlist" element={<GeWatchlist />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
