export const getSelectStyles = (width) => {
  let controlWidth = '187px'; 
  let controlHeight = '44px';
  let fontSize = '18px';
  let optionFontSize = '16px';
  let paddingOption = '10px 14px';
  let heightList = '157px'

  if (width < 768) {
    controlWidth = '122px';
    controlHeight = '44px';
    fontSize = '18px';
    optionFontSize = '16px';
    paddingOption = '10px 14px';
    heightList = '196px';
  } else if (width >= 768 && width < 1024) {
    controlWidth = '148px';
    controlHeight = '44px';
    fontSize = '18px';
    optionFontSize = '16px';
    paddingOption = '10px 14px';
    heightList= '157px';
  }

  return {
    control: (base) => ({
      ...base,
      backgroundColor: 'inherit',
      borderColor: '#fcfcfc',
      borderRadius: '8px',
      cursor: 'pointer',
      boxShadow: 'none',
      height: controlHeight,
      width: controlWidth, 
      color: '#fcfcfc',
      fontSize: fontSize,
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
      fontSize: optionFontSize, 
      fontWeight: 500,
      padding: paddingOption, 
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
      height: heightList,
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
};
