import { Row, Col, Card } from "antd";
import { CardTitle } from "../../StyledComponents";
import DomainInfo from "../Elements/DomainInfo";
import SearchResult from "../Elements/SearchResult";
import TagsComponent from "../Elements/TagsComponent";
import SimilarContentSection from '../Sections/SimilarContentSection';

const DetailPage = () => {
  return (
    <div className='wrapper DetailPage'>
      <Row gutter={[24]}>
        <Col xl={16} lg={15}>
          <SearchResult detailSearch={"detail-search"} />
          <Card className='DomainRegistrar'>
            <CardTitle>Domain Registrar</CardTitle>
            <p className='mb-0'>Godaddy</p>
          </Card>
          <DomainInfo />
        </Col>
        <Col xl={8} lg={9}>
          <TagsComponent />
          <TagsComponent />
          <TagsComponent />
        </Col>
      </Row>
        <SimilarContentSection/>
    </div>
  );
};

export default DetailPage;
