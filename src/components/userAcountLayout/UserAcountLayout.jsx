import s from "./UserAccountLayout.module.css";
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import ModalLogout from "../modalLogout/ModalLogout";

const UserAcountLayout = () => {
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

  return (
    <div>
      <Header openLogoutModal={() => setIsLogoutModalOpen(true)} />
      <div className={s.mainContent}>
        <div className="container">
          <div className={s.layout}>
            <div className={s.sidebar}>
              <Sidebar />
            </div>
            <Outlet />
          </div>
        </div>
      </div>
      {isLogoutModalOpen && <ModalLogout onClose={() => setIsLogoutModalOpen(false)} isLogoutModalOpen={isLogoutModalOpen} />}
    </div>
  );
};

export default UserAcountLayout;
