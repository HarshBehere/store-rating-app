import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import AddStores from "./pages/AddStore";
import AllStores from "./pages/AllStores";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AllStores />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/create-store" element={<AddStores />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
