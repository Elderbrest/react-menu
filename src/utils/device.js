import { useMediaQuery } from 'react-responsive';

//We include tablets here as well
const Desktop = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 768 });
  return isTablet ? children : null;
};
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return isMobile ? children : null;
};

export {
  Desktop,
  Mobile
}