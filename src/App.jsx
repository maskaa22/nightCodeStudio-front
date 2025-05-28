import { Route, Routes } from 'react-router-dom';
import './App.css';

import RestrictedRoute from './components/restrictedRoute/RestrictedRoute';
const PrivateRoute = lazy(()=> import('./components/privateRoute/PrivateRoute' ));
const RegistrationPage = lazy(()=> import('./pages/registrationPage/RegistrationPage'));
const LoginPage = lazy(()=> import('./pages/loginPage/LoginPage'));
import UserAcountLayout from './components/userAcountLayout/UserAcountLayout';
import HomeTab from './components/homeTab/HomeTab';
const StatisticsTab = lazy(()=> import('./components/statisticsTab/StatisticsTab.jsx'));
const CurrencyTab = lazy(()=> import('./components/currencyTab/CurrencyTab'));
import { Toaster } from 'react-hot-toast';
import { useMediaQuery } from 'react-responsive';
import { useRedirectFunction } from './utils/locationFunction.js';
// import { refreshUser } from './redux/auth/operations.js';
// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { selectIsRefreshing } from './redux/auth/selectors.js';
import GlobalLoader from './components/loader/Loader';
import { lazy, Suspense} from 'react';

function App() {
  // const dispatch = useDispatch();
  // const isRefreshing = useSelector(selectIsRefreshing);
  // useEffect(() => {
  //   dispatch(refreshUser());
  // }, [dispatch]);

  const isMobile = useMediaQuery({ maxWidth: 767 });
  useRedirectFunction();

  return (
    <>
    <GlobalLoader />
      <Toaster position="top-right" reverseOrder={false} />
      <Suspense fallback={<GlobalLoader />}>
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
        </Suspense>
    </>
  );
}

export default App;
