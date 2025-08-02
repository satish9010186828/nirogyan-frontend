import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Home from './pages/Home';
import DoctorDetails from './pages/DoctorDetails';

function App() {
  return (
    <AppProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/doctor/:id" element={<DoctorDetails />} />
        </Routes>
      </Router>
    </AppProvider>
  );
}

export default App;