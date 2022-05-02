interface Theme {
  breakpoints: {
    lg: string;
    md: string;
    sm: string;
  };
}

const theme: Theme = { breakpoints: { lg: '1200px', md: '768px', sm: '480px' } };

export default theme;
