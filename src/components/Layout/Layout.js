import Footer from "./Footer";
import Header from "./Header";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const Layout = (props) => {
  const location = useLocation();
  const [headerStyle, setHeaderStyle] = useState();

  useEffect(() => {
    if (location.pathname !== "/sil-react-template/") {
      setHeaderStyle("header_style");
    }else{
      setHeaderStyle("");
    }
  }, [location]);

  return (
    <div className='Layout'>
      <Header headerStyle={headerStyle} />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
