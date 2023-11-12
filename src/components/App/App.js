import { useEffect, useState } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { AppContext } from '../../contexts/AppContext';
import { ErrorContext } from '../../contexts/ErrorContext';
import {
  ProtectedRoute,
  ProtectedAuthRoute,
} from '../ProtectedRoute/ProtectedRoute';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import PopupWithConfirm from '../PopupWithConfirm/PopupWithConfirm';
import * as MainApi from '../../utils/MainApi';

function App() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [savedMovies, setSavedMovies] = useState([]);
  const [error, setError] = useState({});
  const [isPopupWithConfirmOpen, setIsPopupWithConfirmOpen] = useState(false);

  function handleUpdateUser({ name, email }, setIsEdit) {
    setIsLoading(true);
    MainApi.setUserInfo({ name, email })
      .then((userData) => {
        setCurrentUser(userData);
        setError({});
        setIsEdit(false);
        setIsPopupWithConfirmOpen(true);
        setTimeout(setIsPopupWithConfirmOpen, 3000, false);
      })
      .catch((err) =>
        err
          .json()
          .then((error) =>
            setError({ status: err.status, message: error.message })
          )
      )
      .finally(() => setIsLoading(false));
  }

  function handleLogin({ email, password }, resetForm) {
    setIsLoading(true);
    MainApi.authorize({ email, password })
      .then((userData) => {
        if (userData.userId) {
          localStorage.setItem('userId', userData.userId);
          tokenCheck();
          setLoggedIn(true);
          navigate('/movies', { replace: true });
          setError({});
          resetForm();
        }
      })
      .catch((err) =>
        err
          .json()
          .then((error) =>
            setError({ status: err.status, message: error.message })
          )
      )
      .finally(() => setIsLoading(false));
  }

  function handleRegister({ name, email, password }, resetForm) {
    setIsLoading(true);
    MainApi.register({ name, email, password })
      .then((userData) => {
        if (userData.userId) {
          localStorage.setItem('userId', userData.userId);
          tokenCheck();
          setLoggedIn(true);
          navigate('/movies', { replace: true });
          setError({});
          resetForm();
        }
      })
      .catch((err) => {
        err
          .json()
          .then((error) =>
            setError({ status: err.status, message: error.message })
          );
      })
      .finally(() => setIsLoading(false));
  }

  function handleSignOut() {
    localStorage.clear();
    MainApi.removeCoockies().catch(console.error);
    setLoggedIn(false);
    navigate('/', { replace: true });
  }

  function getSavedMovies() {
    MainApi.getSavedMovies()
      .then((movies) => {
        setSavedMovies(movies.reverse());
      })
      .catch(console.error);
  }

  function handleSaveButtonClick(movie) {
    const isSaved = savedMovies.some((m) => m.movieId === movie.id);
    if (isSaved) {
      const savedMovieId = savedMovies.find((m) => m.movieId === movie.id)._id;
      MainApi.deleteMovie(savedMovieId)
        .then(() =>
          setSavedMovies((movies) =>
            movies.filter((m) => m.movieId !== movie.id)
          )
        )
        .catch(console.error);
    } else {
      MainApi.createMovie(movie)
        .then((savedMovie) => {
          setSavedMovies([savedMovie, ...savedMovies]);
        })
        .catch(console.error);
    }
  }

  function handleDeleteSavedMovie(movie) {
    MainApi.deleteMovie(movie._id)
      .then(() =>
        setSavedMovies((movies) =>
          movies.filter((m) => m.movieId !== movie.movieId)
        )
      )
      .catch(console.error);
  }

  function tokenCheck() {
    // const userId = localStorage.getItem('userId');
    MainApi.getUserInfo()
      .then((userData) => {
        setCurrentUser(userData);
        getSavedMovies();
        setLoggedIn(true);
      })
      .catch(() => {
        setLoggedIn(false);
        setCurrentUser({});
        setSavedMovies({});
        localStorage.clear();
      })
      .finally(() => setIsLoaded(true));

    // if (userId) {
    //   MainApi.getUserInfo()
    //     .then((userData) => {
    //       setCurrentUser(userData);
    //       getSavedMovies();
    //     })
    //     .catch(console.error)
    //     .finally(() => {
    //       setLoggedIn(true);
    //       setIsLoaded(true);
    //     });
    // } else {
    //   setIsLoaded(true);
    // }
  }

  useEffect(() => {
    tokenCheck();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='App'>
      {isLoaded && (
        <AppContext.Provider value={loggedIn}>
          <CurrentUserContext.Provider value={currentUser}>
            <ErrorContext.Provider value={{ error, setError }}>
              <Routes>
                <Route path='/' element={<Main />} />
                <Route
                  path='/movies'
                  element={
                    <ProtectedRoute
                      element={Movies}
                      savedMovies={savedMovies}
                      handleSaveButtonClick={handleSaveButtonClick}
                    />
                  }
                />
                <Route
                  path='/saved-movies'
                  element={
                    <ProtectedRoute
                      element={SavedMovies}
                      savedMovies={savedMovies}
                      setSavedMovies={setSavedMovies}
                      handleDeleteSavedMovie={handleDeleteSavedMovie}
                    />
                  }
                />
                <Route
                  path='/profile'
                  element={
                    <ProtectedRoute
                      element={Profile}
                      handleUpdateUser={handleUpdateUser}
                      handleSignOut={handleSignOut}
                      loggedIn={loggedIn}
                      isLoading={isLoading}
                    />
                  }
                />
                <Route
                  path='/signup'
                  element={
                    <ProtectedAuthRoute
                      element={Register}
                      handleRegister={handleRegister}
                      pathname={pathname}
                      isLoading={isLoading}
                    />
                  }
                />
                <Route
                  path='/signin'
                  element={
                    <ProtectedAuthRoute
                      element={Login}
                      handleLogin={handleLogin}
                      pathname={pathname}
                      isLoading={isLoading}
                    />
                  }
                />
                <Route path='*' element={<NotFoundPage />} />
              </Routes>
              <PopupWithConfirm isOpen={isPopupWithConfirmOpen} />
            </ErrorContext.Provider>
          </CurrentUserContext.Provider>
        </AppContext.Provider>
      )}
    </div>
  );
}

export default App;
