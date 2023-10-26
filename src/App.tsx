import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { RequireAuth } from './components/RequiredAuth';
import { LoginPage } from './pages/Login/Login';
import { useSelector } from 'react-redux';

function App() {
  const token = useSelector((state) => state.token.value);
  return (
    <Router>
      <Routes>
        <Route
          path='/login'
          element={
            <>
              <LoginPage />
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
