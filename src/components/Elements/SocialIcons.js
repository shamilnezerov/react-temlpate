
import { FaTwitter, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const SocialIcons = () => {
  return (
   <div className='social-icons'>
    <ul>
        <li><a href='#a' className='twitter'> <FaTwitter/></a></li>
        <li><a href='#a' className='facebook'> <FaFacebookF /></a></li>
        <li><a href='#a' className='linkedin'><FaLinkedinIn/></a></li>
    </ul>
   </div>
  );
};

export default SocialIcons;
