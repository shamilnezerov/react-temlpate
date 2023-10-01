import { SectionTitle, SectionDescr, FlexWrapDiv, FlexDiv, GreenCircle, Text } from "../../StyledComponents";
import { Row, Col } from "antd";
import styles from '../../assets/css/Page.module.css'
import { Images } from '../../Images';
import { HiArrowNarrowRight } from "react-icons/hi";


const HowWorkSection = () => {
  return (
    <div className={`HowWorkSection ${styles.section_padding}`}>
      <Row gutter={[0, 24]} align='middle'>
        <Col xl={12} lg={15}>
          <SectionTitle>Use Domain Finder to find unique domains!</SectionTitle>
          <SectionDescr>
            Millions of people are searching for companies, domains, meta tags,
            company names and etc., on Domain finder. Try today! 1 000 000 data
            for your search.
          </SectionDescr>
          <FlexWrapDiv className='pt-4'>
            <FlexWrapDiv className='mb-3'>
                <GreenCircle>1</GreenCircle>
                <Text>Type to search</Text>
                <span className='arrow_icon'><HiArrowNarrowRight/></span>
            </FlexWrapDiv>
            <FlexWrapDiv className='mb-3'>
                <GreenCircle>2</GreenCircle>
                <Text>Find domains</Text>
                <span className='arrow_icon'><HiArrowNarrowRight/></span>
            </FlexWrapDiv>
            <FlexWrapDiv className='mb-3'>
                <GreenCircle>3</GreenCircle>
                <Text>Filter them</Text>
            </FlexWrapDiv>
          </FlexWrapDiv>
        </Col>
        <Col xl={12} lg={9}>
            <div className='img_wrap'>
                <img src={Images.svgImg} alt='svg'/>
            </div>
        </Col>
      </Row>
    </div>
  );
};

export default HowWorkSection;
