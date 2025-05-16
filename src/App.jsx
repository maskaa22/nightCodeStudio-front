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
    <StatisticsTab />
  );
}

export default App;
