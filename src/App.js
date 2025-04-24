import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Import components
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import MenuPage from './components/MenuPage';
import AboutUsPage from './components/AboutUsPage';
import ReservationPage from './components/ReservationPage';
import OrderOnlinePage from './components/OrderOnlinePage';
import EventsPage from './components/EventsPage';
import ContactUsPage from './components/ContactUsPage';
import GalleryPage from './components/GalleryPage';
import BlogPage from './components/BlogPage';
import TestimonialsPage from './components/TestimonialsPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/reservations" element={<ReservationPage />} />
            <Route path="/order-online" element={<OrderOnlinePage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/contact" element={<ContactUsPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;