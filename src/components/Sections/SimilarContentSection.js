import { Row, Col } from 'antd';
import { CardTitle } from "../../StyledComponents";
import SearchResult from "../Elements/SearchResult";

const SimilarContentSection = () => {
  return (
    <div className='SimilarContent'>
      <CardTitle>Similar content</CardTitle>
      <Row gutter={[24]}>
        <Col xl={8} md={12}>
          <SearchResult className={"similar_card_header"} />
        </Col>
        <Col xl={8} md={12}>
          <SearchResult className={"similar_card_header"} />
        </Col>
        <Col xl={8} md={12}>
          <SearchResult className={"similar_card_header"} />
        </Col>
      </Row>
    </div>
  );
};

export default SimilarContentSection;
