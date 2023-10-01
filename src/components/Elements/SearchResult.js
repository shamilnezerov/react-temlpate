import { Card } from "antd";
import { SiAdobe } from "react-icons/si";
import {
  SearchTagUl,
  SearchTagLi,
  FlexDiv,
  CardTitle,
} from "../../StyledComponents";
import { Images } from "../../Images";

const SearchResult = (props) => {
  const { detailSearch, className } = props;
  return (
    <div className={`SearchResult ${detailSearch}`}>
      <Card
        style={{
          width: "100%",
        }}
      >
        <div className={`card_header ${className}`}>
          <div>
            <CardTitle className='mb-2'>
              <span className='icon_wrap'>
                <SiAdobe />
              </span>
              Adobe
            </CardTitle>
            <p className='card_header_descr'>https://www.adobe.com</p>
          </div>
          <FlexDiv className='rating_wrap'>
            <div className='rating_icon'>
              <img src={Images.ratingLogo} alt='rating' />
            </div>
            <FlexDiv className='rating'>
              <p>
                <span>3.5</span>
                <span>Local rating</span>
              </p>
              <p>
                <span>5.0</span>
                <span>Global rating</span>
              </p>
            </FlexDiv>
          </FlexDiv>
        </div>
        <div className='card_body'>
          <p className='card_body_title'>
            Adobe: Creative, marketing and document management ...
          </p>
          <p className='card_body_descr'>
            Adobe is changing the world through digital experiences. We help our
            customers create, deliver and optimize content and applications.
          </p>
          <SearchTagUl>
            <SearchTagLi>adobe</SearchTagLi>
            <SearchTagLi>design</SearchTagLi>
            <SearchTagLi>creative</SearchTagLi>
            <SearchTagLi>designer</SearchTagLi>
            <SearchTagLi>photoshop</SearchTagLi>
            <SearchTagLi>illustrator</SearchTagLi>
          </SearchTagUl>
        </div>
      </Card>
    </div>
  );
};

export default SearchResult;
