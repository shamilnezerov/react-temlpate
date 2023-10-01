import SearchComponent from "../Elements/SearchComponent";
import { Row, Col } from "antd";
import SearchResult from "../Elements/SearchResult";
import Filters from '../Elements/Filters';
import { Link } from 'react-router-dom';


const SearchResultPage = () => {


  return (
    <div className='wrapper'>
      <SearchComponent className="search_style"/>
      <div className='SearchResultPage'>
        <Row gutter={[24]}>
          <Col lg={8} md={7} span={24}>
            <div className='left_col'>
              <p className='col_top'>Filters</p>
              <div className='FilterWrap'>
                <Filters/>
              </div>
            </div>
          </Col>
          <Col lg={16} md={17} span={24}>
            <div className='right_col'>
              <div className='d-flex justify-content-between col_top'>
                <p>Showing: 599 filtered domains</p>
                <p>
                  Sort by: <span>Relevance</span>
                </p>
              </div>
              <Link to='detail-page'><SearchResult /></Link>
              <Link to='detail-page'><SearchResult /></Link>
              <Link to='detail-page'><SearchResult /></Link>
              <Link to='detail-page'><SearchResult /></Link>
              <Link to='detail-page'><SearchResult /></Link>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default SearchResultPage;
