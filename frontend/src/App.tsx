import { AppRouter } from './components/AppRouter';
import { BrowserRouter } from 'react-router-dom';
import { useAuth } from './hooks/auth.hook';
import { AuthContext } from './context/AuthContext';


export default function App() {
  const { token, login, logout, userId } = useAuth();
  const isAuthenticated = !token;
  console.log(isAuthenticated);
  const routes = AppRouter(isAuthenticated);
  return (
    <AuthContext.Provider value={{ token, login, logout, userId, isAuthenticated }}>
      <BrowserRouter>
        <div className="wrapper">{routes}</div>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}
