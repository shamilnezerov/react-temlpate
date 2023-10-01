import { Nav, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";

const NavList = (props) => {

  const { data, navClick, isOpen } = props;
  
  return (
    <Nav className='me-auto' navbar>
      {data.map((navItem, i) => {
        return (
          <NavItem key={i} className={navItem.className}>
            <NavLink
              to={`sil-react-template${navItem.path}`}
              className='nav-link'
              onClick={isOpen && navClick}
            >
              {navItem.page}
            </NavLink>
          </NavItem>
        );
      })}
    </Nav>
  );
};

export default NavList;
