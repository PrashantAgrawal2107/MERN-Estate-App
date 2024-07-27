import {BrowserRouter , Route , Routes} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import About from './pages/About';
import Profile from './pages/Profile';
import Header from './components/Header';

export default function App() {
  return <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/profile" element={<Profile/>} />
        </Routes>
    </BrowserRouter>
}

