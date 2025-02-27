import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import PropTypes from 'prop-types'; // Import PropTypes
import Register from './components/register';
import Login from './components/login';
import Bus from './components/bus';
import { ToastContainer } from 'react-toastify';

// Private Route Component
const PrivateRoute = ({ element }) => {
  const token = localStorage.getItem('accessToken');
  return token ? element : <Navigate to="/login" />;
};

// Add PropTypes validation
PrivateRoute.propTypes = {
  element: PropTypes.element.isRequired,
};

function App() {
  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/bus" element={<PrivateRoute element={<Bus />} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
