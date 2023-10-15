import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AppContext } from '../../contexts/AppContext';

function ProtectedRoute({ element: Component, ...props }) {
  const loggedIn = useContext(AppContext);

  return loggedIn ? (
    <Component {...props}></Component>
  ) : (
    <Navigate to='/' replace />
  );
}

export default ProtectedRoute;
