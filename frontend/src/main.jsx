import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from "react-router";
import MobileMenu from './components/MobileMenu.jsx';
import MobileNavBar from './components/MobileNavBar.jsx';
import CreatePage from './pages/CreatePage.jsx';
import NotificationsPage from './pages/NotificationsPage.jsx';
import MessegePage from './pages/MessegePage.jsx';
import ReelsPage from './pages/ReelsPage.jsx';
import ExplorePage from './pages/ExplorePage.jsx';
import ProfilePage from './pages/ProfilePage.jsx';
import SearchPage from './pages/SearchPage.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
  <BrowserRouter>
  <MobileNavBar/>
  <Routes>
      <Route path="/" element={<App/>} />
      <Route path="/profile" element={<ProfilePage/>} />
      <Route path="/notifications" element={<NotificationsPage/>} />
      <Route path="/messeges" element={<MessegePage/>} />
      <Route path="/search" element={<SearchPage/>} />
      <Route path="/reels" element={<ReelsPage/>} />
      <Route path="/explore" element={<ExplorePage/>} />
      <Route path="/create" element={<CreatePage/>} />
      
    </Routes>
    <MobileMenu/>
  </BrowserRouter>
  </StrictMode>,
)
