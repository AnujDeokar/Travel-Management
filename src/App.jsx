import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import ExplorePage from './pages/ExplorePage'
import TripsPage from './pages/TripsPage'
import DestinationsPage from './pages/DestinationsPage'
import JournalPage from './pages/JournalPage'
import JournalPostPage from './pages/JournalPostPage'
import ContactPage from './pages/ContactPage'
import BookingPage from './pages/BookingPage'
import SignupPage from './pages/SignupPage'
import LoginPage from './pages/LoginPage'

export default function App() {
  return (
    <BrowserRouter>
      <div className="app" style={{ position: 'relative' }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<ExplorePage />} />
          <Route path="/trips" element={<TripsPage />} />
          <Route path="/destinations" element={<DestinationsPage />} />
          <Route path="/journal" element={<JournalPage />} />
          <Route path="/journal/:postId" element={<JournalPostPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/book" element={<BookingPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}