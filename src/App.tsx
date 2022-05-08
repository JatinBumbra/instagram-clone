import { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useAppContext } from './context';
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  const navigate = useNavigate();

  const { activeUser } = useAppContext();

  useEffect(() => {
    if (!activeUser) navigate('/login');
    else navigate('/');
  }, [activeUser]);

  return (
    <div className='bg-neutral-100 min-h-screen'>
      <Routes>
        {!activeUser ? (
          <Route path='/login' element={<Login />} />
        ) : (
          <Route path='/' element={<Home />} />
        )}
      </Routes>
    </div>
  );
}

export default App;
