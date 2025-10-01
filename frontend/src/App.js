import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import VisionMission from "./pages/VisionMission";
import HistoryAchieve from "./pages/HistoryAchieve";
import Trustees from "./pages/Trustees";
import Leadership from "./pages/Leadership";
import Membership from "./pages/Membership";
import Meetings from "./pages/Meetings";
import Notifications from "./pages/Notifications";
import Contact from "./pages/Contact";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <div className="App min-h-screen bg-slate-50">
      <BrowserRouter>
        <Navbar />
        <main className="min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/vision-mission" element={<VisionMission />} />
            <Route path="/history-achieve" element={<HistoryAchieve />} />
            <Route path="/trustees" element={<Trustees />} />
            <Route path="/leadership" element={<Leadership />} />
            <Route path="/membership" element={<Membership />} />
            <Route path="/meetings" element={<Meetings />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <Toaster />
      </BrowserRouter>
    </div>
  );
}

export default App;