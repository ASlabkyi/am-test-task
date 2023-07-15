import { Outlet } from 'react-router-dom';
import { LayoutContainer } from './Layout.styled';

const Layout = () => {
  return (
    <LayoutContainer>
      <Outlet />
    </LayoutContainer>
  );
};

export default Layout;
