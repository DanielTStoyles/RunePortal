/** @format */
import { QueryClient, QueryClientProvider } from "react-query";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import AuthProvider from "./context/AuthProvider"; // Import AuthProvider
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import GrandExchange from "./pages/GrandeExchange";
import ProfilePage from "./pages/ProfilePage";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/ge" element={<GrandExchange />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
