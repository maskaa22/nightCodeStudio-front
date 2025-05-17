import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";
import { getNavLinkClass } from "../../utils/utils";
import clsx from "clsx";
import { useMediaQuery } from "react-responsive";

const Navigation = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <div className={s.container}>
      <NavLink to="/" className={(props) => getNavLinkClass(props, s)}>
        <div>
          <svg className={s.icon} width="27" height="24">
            <use href="/sprite.svg#icon-home" />
          </svg>
        </div>
      </NavLink>
      {!isMobile && <p className={s.linkText}>Home</p>}
      <NavLink
        to="/statistics"
        className={(props) => getNavLinkClass(props, s)}
      >
        {({ isActive }) => (
          <svg
            className={clsx(s.icon, isActive && s.activeIcon)}
            width="26"
            height="15"
          >
            <use href="/sprite.svg#icon-statistics" />
          </svg>
        )}
      </NavLink>
      <NavLink to="/currency" className={(props) => getNavLinkClass(props, s)}>
        {({ isActive }) => (
          <svg
            className={clsx(s.icon, isActive && s.activeIcon)}
            width="13"
            height="22"
          >
            <use href="/sprite.svg#icon-currency" />
          </svg>
        )}
      </NavLink>
    </div>
  );
};

export default Navigation;
