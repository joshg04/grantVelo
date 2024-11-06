import "./App.css";
import Navbar from "./Components/navbar";
import Home from "./Pages/home";
import Login from "./Pages/login";
import Signup from "./Pages/signup";
import Dashboard from "./Pages/dashboard";
import Mygrants from "./Pages/myGrants";
import Apptracker from "./Pages/appTracker";
import Discover from "./Pages/discover";
import AboutUs from "./Pages/aboutUs";
import Contact from "./Pages/contact";
import { HorizontalNonLinearStepper } from "./Components/stepper";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/myGrants" element={<Mygrants />} />
        <Route path="/appTracker" element={<Apptracker />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/aboutUs" element={<AboutUs />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route
          path="/appTracker/:stepId"
          element={<HorizontalNonLinearStepper />}
        />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;