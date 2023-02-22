import { Link } from "react-router-dom";
import logo from "../../../assets/images/logoPequeño.jpg";
const Logo = () => {
  return (
    <div className="flex circular-image">
      <Link to="/">
        <img src={logo} alt="Logo eCommerce"></img>
      </Link>
    </div>
  );
};

export default Logo;
