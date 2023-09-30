import { useEffect, useState } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { AppContext } from '../../contexts/AppContext';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import * as MainApi from '../../utils/MainApi';

function App() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);

  function handleUpdateUser({ name, email }) {
    MainApi.setUserInfo({ name, email })
      .then((userData) => setCurrentUser(userData))
      .catch(console.error);
  }

  function handleLogin({ email, password }) {
    setIsLoaded(false);
    MainApi.authorize({ email, password })
      .then((userData) => {
        if (userData.userId) {
          localStorage.setItem('userId', userData.userId);
          tokenCheck();
        }
      })
      .catch(console.error)
      .finally(() => {
        setIsLoaded(true);
        setLoggedIn(true);
        navigate('/movies', { replace: true });
      });
  }

  function handleRegister({ name, email, password }) {
    MainApi.register({ name, email, password })
      .then((userData) => {
        if (userData.userId) {
          localStorage.setItem('userId', userData.userId);
          tokenCheck();
        }
      })
      .catch(console.error)
      .finally(() => {
        setLoggedIn(true);
        setIsLoaded(true);
        navigate('/movies', { replace: true });
      });
  }

  function handleSignOut() {
    localStorage.removeItem('userId');
    localStorage.removeItem('checkboxState');
    localStorage.removeItem('searchText');
    localStorage.removeItem('movies');
    MainApi.removeCoockies().catch(console.error);
    setLoggedIn(false);
    navigate('/', { replace: true });
  }

  function tokenCheck() {
    const userId = localStorage.getItem('userId');

    if (userId) {
      MainApi.getUserInfo()
        .then((userData) => {
          setCurrentUser(userData);
        })
        .finally(() => {
          setLoggedIn(true);
          setIsLoaded(true);
        });
    } else {
      setIsLoaded(true);
    }
  }

  useEffect(() => {
    tokenCheck();
  }, []);

  return (
    <div className='App'>
      {isLoaded && (
        <AppContext.Provider value={loggedIn}>
          <CurrentUserContext.Provider value={currentUser}>
            <Routes>
              <Route path='/' element={<Main />} />
              <Route
                path='/movies'
                element={<ProtectedRoute element={Movies} />}
              />
              <Route
                path='/saved-movies'
                element={<ProtectedRoute element={SavedMovies} />}
              />
              <Route
                path='/profile'
                element={
                  <ProtectedRoute
                    element={Profile}
                    handleUpdateUser={handleUpdateUser}
                    handleSignOut={handleSignOut}
                    loggedIn={loggedIn}
                  />
                }
              />
              <Route
                path='/signup'
                element={
                  <Register
                    handleRegister={handleRegister}
                    pathname={pathname}
                  />
                }
              />
              <Route
                path='/signin'
                element={
                  <Login handleLogin={handleLogin} pathname={pathname} />
                }
              />
              <Route path='*' element={<NotFoundPage />} />
            </Routes>
          </CurrentUserContext.Provider>
        </AppContext.Provider>
      )}
    </div>
  );
}

export default App;
