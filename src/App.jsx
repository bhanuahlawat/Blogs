import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import BlogDetail from "./pages/BlogDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import SignIn from "./pages/SignIn";
import AllPosts from "./pages/AllPosts";
import Footer from "./components/Footer";
import SocialMedia from "./pages/Socialmedia";
import SignUp from "./pages/signup";
import AdminPanel from "./pages/Admin/AdminPannel";
import UnderConstruction from "./pages/Working";

function App() {
  return (
      <Router>
        <Navbar />
        <Sidebar />
        <div className="pt-[88px] pr-12 min-h-screen"> 
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/signin" element={<SignIn />} />
            <Route path="/AllPosts" element={<AllPosts />} />
            <Route path="/DashBoard" element={<AdminPanel />} />
            <Route path="/Working" element={<UnderConstruction/>} />
          </Routes>
          <Footer /> 
        </div>
      </Router>
  );
}

export default App;