export const getNavLinkClass = ({ isActive }, styles) => {
  return isActive ? styles.active : styles.link;
};
