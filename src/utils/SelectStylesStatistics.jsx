export const SelectStyles = {
  control: (base) => ({
    ...base,
    backgroundColor: 'inherit',
    borderColor: '#fcfcfc',
    borderRadius: '8px',
    marginRight: '20px',
    marginBottom: '20px',
    cursor: 'pointer',
    boxShadow: 'none',
    height: '44px',
    width: '122px',
    color: '#fcfcfc',
    fontSize: '18px',
    fontFamily: 'Inter',
    fontWeight: '500',
    '&:hover': {
      border: '1px solid #fcfcfc',
    },
    '&:focus': {
      border: '1px solid #fcfcfc',
    },
  }),
  option: (base, state) => ({
    ...base,
    background: state.isSelected
      ? 'linear-gradient(180deg, #355359 0%, #3b5d63 100%)'
      : state.isFocused
      ? 'linear-gradient(180deg, #355359 0%, #3b5d63 100%)'
      : 'transparent',
    color: '#FCFCFC',
    fontSize: '16px',
    fontWeight: 500,
    padding: '12px 16px',
    cursor: 'pointer',
  }),
  menu: (base) => ({
    ...base,
    backgroundColor: '#294045',
    borderRadius: '8px',
    overflow: 'hidden',
    marginTop: 4,
  }),
  menuList: (base) => ({
    ...base,
    padding: 0,
    scrollbarWidth: 'none',
    overflowY: 'auto',
  }),
  singleValue: (base) => ({
    ...base,
    color: '#fcfcfc',
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
  dropdownIndicator: (base) => ({
    ...base,
    color: '#fcfcfc',
    padding: '0 8px',
    transition: 'transform 0.5s',
    '&:hover': {
      transform: 'rotate(180deg)',
    },
    '&:focus': {
      transform: 'rotate(180deg)',
    },
  }),
  placeholder: (base) => ({
    ...base,
    color: '#fcfcfc',
  }),
};
