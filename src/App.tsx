import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { RequireAuth } from './components/RequiredAuth';
import { Sign } from './pages/SignPage/Sign';
import { useSelector } from 'react-redux';
import './App.css';

function App() {
  const token = useSelector((state) => state.token.value);
  return (
    <Router>
      <Routes>
        <Route
          path='/login'
          element={
            <>
              <Sign />
            </>
          }
        />
        <Route
          path='/'
          element={
            <RequireAuth>
              <>
                <h1>Home</h1>
              </>
            </RequireAuth>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
