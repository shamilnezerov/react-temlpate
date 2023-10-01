import { Row, Col } from "antd";
import SearchComponent from '../Elements/SearchComponent';
import {SectionTitle, SectionDescr, SearchTagUl, SearchTagLi} from '../../StyledComponents';
import styles from '../../assets/css/Page.module.css'

const MainSection = () => {
  return (
    <div className={`MainSection ${styles.section_padding}`}>
      <Row justify='center' align='middle'>
        <Col xl={15} lg={18}>
          <SectionTitle>Use Domain Finder to find unique domains!</SectionTitle>
          <SectionDescr>
            Millions of people are searching for companies, domains, meta tags,
            company names and etc., on Domain finder. Try today! 1 000 000 data
            for your search.
          </SectionDescr>
          <SearchComponent/>
          <div className='top-searches'>
            <p className='fw-bolder me-4 mb-0'>Top searches:</p>
            <SearchTagUl>
              <SearchTagLi>development</SearchTagLi>
              <SearchTagLi>agile</SearchTagLi>
              <SearchTagLi>design</SearchTagLi>
              <SearchTagLi>finance</SearchTagLi>
              <SearchTagLi>startup</SearchTagLi>
              <SearchTagLi>delivery</SearchTagLi>
            </SearchTagUl>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default MainSection;
