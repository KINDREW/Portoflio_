import {
  FaEnvelopeOpenText,
  FaMailBulk,
  FaMailchimp,
  FaMapMarked,
  FaSearchLocation,
  FaSms,
} from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="rasta">
        <h3>Contact</h3>
        <p>Don't be shy! Hit me up! 👇🏾</p>
      </div>
      <div className="fol">
        <div className="fo2">
          <span className="footer-icons">
            <FaMapMarked size={"40px"} />
          </span>
          <div className="fo3">
            <h3>Location</h3>
            <p>Takoradi, Ghana</p>
          </div>
        </div>
        <div className="fo2">
          <span className="footer-icons">
            <FaEnvelopeOpenText size={"40px"} />
          </span>
          <div className="fo3">
            <h3>Email</h3>
            <p>kindrew99@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
