import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";
import { getNavLinkClass } from "../../utils/utils";
import { useMediaQuery } from "react-responsive";

const Navigation = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <div className={s.container}>
      <NavLink to="/" className={(props) => getNavLinkClass(props, s)}>
        <div className={s.linkContainer}>
          <svg className={s.icon} width="27" height="24">
            <use href="/sprite.svg#icon-home" />
          </svg>
          {!isMobile && <p className={s.linkText}>Home</p>}
        </div>
      </NavLink>

      <NavLink
        to="/statistics"
        className={(props) => getNavLinkClass(props, s)}
      >
        <div className={s.linkContainer}>
          <svg className={s.icon} width="26" height="15">
            <use href="/sprite.svg#icon-stats" />
          </svg>
          {!isMobile && <p className={s.linkText}>Statistics</p>}
        </div>
      </NavLink>
      {isMobile && (
        <NavLink
          to="/currency"
          className={(props) => getNavLinkClass(props, s)}
        >
          <svg className={s.icon} width="13" height="22">
            <use href="/sprite.svg#icon-currency" />
          </svg>
        </NavLink>
      )}
    </div>
  );
};

export default Navigation;
