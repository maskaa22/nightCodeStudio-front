import { Route, Routes } from 'react-router-dom';
import './App.css';
import RestrictedRoute from './components/restrictedRoute/RestrictedRoute';
import PrivateRoute from './components/privateRoute/PrivateRoute';
import RegistrationPage from './pages/registrationPage/RegistrationPage';
import LoginPage from './pages/loginPage/LoginPage';
import UserAcountLayout from './components/userAcountLayout/UserAcountLayout';
import HomeTab from './components/homeTab/HomeTab';
import StatisticsTab from './components/statisticsTab/StatisticsTab.jsx';
import CurrencyTab from './components/currencyTab/CurrencyTab';
import { Toaster } from 'react-hot-toast';
import { useMediaQuery } from 'react-responsive';
import { useRedirectFunction } from './utils/locationFunction.js';
import GlobalLoader from './components/loader/Loader';

function App() {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  useRedirectFunction();

  return (
    <>
      <GlobalLoader />
      <Toaster position="top-right" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<UserAcountLayout />}>
          <Route
            path="/"
            element={
              <PrivateRoute component={<HomeTab />} redirectTo="/login" />
            }
          />
          <Route
            path="/statistics"
            element={
              <PrivateRoute component={<StatisticsTab />} redirectTo="/login" />
            }
          />
          {/* Лише на мобільній версії */}
          {isMobile && (
            <Route
              path="/currency"
              element={
                <PrivateRoute component={<CurrencyTab />} redirectTo="/login" />
              }
            />
          )}
        </Route>

        <Route
          path="/register"
          element={
            <RestrictedRoute
              component={<RegistrationPage />}
              redirectTo="/login"
            />
          }
        />
        <Route
          path="/login"
          element={<RestrictedRoute component={<LoginPage />} redirectTo="/" />}
        />
      </Routes>
    </>
  );
}

export default App;
