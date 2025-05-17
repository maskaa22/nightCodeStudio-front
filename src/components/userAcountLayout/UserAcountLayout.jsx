import s from "./UserAccountLayout.module.css";
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import ModalLogout from "../modalLogout/ModalLogout";

const UserAcountLayout = () => {
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

  return (
    <main>
      <Header openLogoutModal={() => setIsLogoutModalOpen(true)} />
      <div className={s.mainContent}>
        <div className="container">
          <Sidebar />
          <Outlet />
        </div>
      </div>
      {isLogoutModalOpen && <ModalLogout />}
    </main>
  );
};

export default UserAcountLayout;
