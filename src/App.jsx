import { Route, Routes } from "react-router-dom";
import "./App.css";
import RestrictedRoute from "./components/restrictedRoute/RestrictedRoute";
import PrivateRoute from "./components/privateRoute/PrivateRoute";
import NotFound from "./pages/notFound/NotFound";
import RegistrationPage from "./pages/registrationPage/RegistrationPage";
import LoginPage from "./pages/loginPage/LoginPage";
import UserAcountLayout from "./components/userAcountLayout/UserAcountLayout";
import HomeTab from "./components/homeTab/HomeTab";
import StatisticsTab from "./components/statisticsTab/StatisticsTab.jsx";
import CurrencyTab from "./components/currencyTab/CurrencyTab";

function App() {
  return (
    <Routes>
      <Route path="/" element={<UserAcountLayout />}>
        <Route path="/" element={<HomeTab />} />
        <Route
          path="/statistics"
          element={<StatisticsTab />
          }
          // element={
          //   <PrivateRoute component={<StatisticsTab />} redirectTo="/login" />
          // }
        />
        {/* Лише на мобільній версії */}
        <Route
          path="/currency"
          element={<CurrencyTab />
          }
          // element={
          //   <PrivateRoute component={<CurrencyTab />} redirectTo="/login" />
          // }
        />
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

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
