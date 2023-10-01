import { useState } from "react";
import { Navbar, NavbarToggler, NavbarBrand } from "reactstrap";
import { useLocation } from "react-router-dom";
import SearchComponent from "../Elements/SearchComponent";
import LangComponent from "../Elements/LangComponent";
import SocialIcons from "../Elements/SocialIcons";
import NavList from './NavList';


const Header = (props) => {

  const data = [
    {
      page: 'Main',
      path: '/',
      className: 'd-block d-lg-none'
    },
    {
      page: 'About us',
      path: '/about',
      className: ''
    },
    {
      page: 'For Developers',
      path: '/for-developers',
      className: ''
    },
    {
      page: 'Terms of Service',
      path: '/terms-of-service',
      className: 'd-block d-lg-none'
    },
    {
      page: 'Privacy Policy',
      path: '/privacy-policy',
      className: 'd-block d-lg-none'
    },
    {
      page: 'Trust & Safety',
      path: '/safety',
      className: 'd-block d-lg-none'
    }
  ]

  const [isOpen, setIsOpen] = useState(false);
  const [mobileHeader, setMobileHeader] = useState("-100%");

  const location = useLocation();

  const { headerStyle } = props;

  
  const toggle = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
        setMobileHeader("0%")
        document.body.style.overflow = "hidden";
      }
      else {
        setMobileHeader("-100%")
        document.body.style.overflow = "auto";
    }
  };

  const navClick = () => {
    setMobileHeader("-100%")
    document.body.style.overflow = "auto";
    setIsOpen(false);
  }

  return (
    <header className={`${headerStyle} ${isOpen ? "mobile_header" : ""}`}>
      <div className='container'>
        <Navbar expand='lg'>
          <NavbarToggler
            onClick={toggle}
            className={isOpen ? "open" : ""}
          >
            <span className='navbar-toggler-icon'>
              <span className='line_menu'></span>
              <span className='line_menu'></span>
              <span className='line_menu'></span>
            </span>
          </NavbarToggler>
          <NavbarBrand href='/sil-react-template/' className='logo'>
            DOMAINFINDER
          </NavbarBrand>

          {location.pathname !== "/sil-react-template/" &&
            location.pathname !== "/sil-react-template/search-result" && (
              <SearchComponent searchStyle={"header_search"} />
            )}

          <div className='menu_wrapper' isOpen={isOpen} style={{left: mobileHeader}}>
            <NavList data={data} navClick={navClick} isOpen={isOpen}/>
            <div className='d-flex flex-wrap justify-content-between align-items-center d-lg-none header_bottom'>
              <LangComponent />
              <SocialIcons />
            </div>
          </div>
        </Navbar>
      </div>
    </header>
  );
};

export default Header;
