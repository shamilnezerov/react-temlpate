import { Col, Row} from "antd";
import LangComponent from '../Elements/LangComponent';
import SocialIcons from '../Elements/SocialIcons';



const Footer = () => {
  return (
    <footer>
      <div className='container'>
        <Row gutter={[24, 24]} className="flex-column flex-md-row">
          <Col lg={16} md={17} className="d-flex flex-column flex-md-row">
            <SocialIcons/>
            <ul className='footer-list flex-column flex-md-row p-0'>
                <li>Terms of Service</li>
                <li>Privacy Policy</li>
                <li>Trust & Safety</li>
            </ul>
          </Col>
          <Col lg={8} md={7}>
            <LangComponent/>
          </Col>
        </Row>
      </div>
    </footer>
  );
};

export default Footer;
