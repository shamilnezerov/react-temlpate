import { Select, Input } from "antd";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";

const { Option } = Select;

const SearchComponent = (props) => {

  const {searchStyle, className} = props;
 
  return (
    <div className={`Search d-flex ${className} ${searchStyle}`}>
      <Input.Group compact>
        <Select
          defaultValue='Resources'
        >
          <Option value='Only domain'>Only domain</Option>
          <Option value='Others options'>Others options</Option>
        </Select>
        <Input
          allowClear
          placeholder='Search something...'
        />
        <Link to='/sil-react-template/search-result' className='search-btn'><BsSearch/></Link>
      </Input.Group>

      
    </div>
  );
};

export default SearchComponent;
