import s from "./Header.module.css";

const Header = ({ openLogoutModal }) => {
  return (
    <header className={s.header}>
      <div className="container">
        <div className={s.layout}>
          <img
            className={s.logo}
            src="/images/mob-logo-white-1x.png"
            srcSet="/images/mob-logo-white-1x.png 1x, /images/mob-logo-white-2x.png 2x"
            alt="Logo"
          />
          <div className={s.exitBlock}>
            <p className={s.name}>name</p>
            <button className={s.exitButton} onClick={openLogoutModal}>
              <svg className={s.exitIcon} width="18" height="18">
                <use href="/sprite.svg#icon-exit" />
              </svg>
              <p className={s.exitText}>Exit</p>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
