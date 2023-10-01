import { SearchTagUl, SearchTagLi, CardTitle } from "../../StyledComponents";
import { Card } from "antd";

const TagsComponent = () => {
  return (
    <Card>
        <CardTitle>Tags</CardTitle>
      <SearchTagUl>
        <SearchTagLi>adobe</SearchTagLi>
        <SearchTagLi>design</SearchTagLi>
        <SearchTagLi>creative</SearchTagLi>
        <SearchTagLi>designer</SearchTagLi>
        <SearchTagLi>photoshop</SearchTagLi>
        <SearchTagLi>illustrator</SearchTagLi>
      </SearchTagUl>
    </Card>
  );
};

export default TagsComponent;
