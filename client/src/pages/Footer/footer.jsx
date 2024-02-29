import "./footer.css";
import logo from "../../assets/Images/logo-1.jpeg";
import facebook from "../../assets/Images/facebook.jpeg";
import twitter from "../../assets/Images/twitter.jpeg";
import youtube from "../../assets/Images/youtube.jpeg";
import instagram from "../../assets/Images/instagram.jpeg";
import linkedin from "../../assets/Images/linkedin.jpeg";

const Footer = () => {
  return (
    <>
      <div className="footer-con">
        <div className="footer-main">
          <div className="footer-sub">
            <h1>ABOUT US</h1>
            <p>FAQ's</p>
            <p>Contact us</p>
            <p>Terms & conditions</p>
            <p>Privacy policy</p>
            <p>Workshop location</p>
            <p>Offers</p>
            <p>reviews</p>
          </div>
          <div className="footer-sub">
            <h1>OUR SERVICES</h1>
            <p>General service</p>
            <p>Denting & painting</p>
            <p>AC & Electrical repairs</p>
            <p>General health checkup</p>
            <p>Battery & Tyre service</p>
            <p>Door step service</p>
            <p>PPF & Ceramic service</p>
          </div>
          <div className="footer-sub">
            <h1>LUXARY BRANDS</h1>
            <p>Jaguar</p>
            <p>Porsche</p>
            <p>Rolls Royce</p>
            <p>Ferrari</p>
            <p>Land Rover</p>
            <p>Mercedes</p>
            <p>BMW</p>
            <p>Audi</p>
            <p>Volvo</p>
            <p>Mitsubishi</p>
          </div>
          <div className="footer-sub">
            <h1>POPULAR BRANDS</h1>
            <p>Mahindra</p>
            <p>Renault</p>
            <p>Fiat</p>
            <p>Kia</p>
            <p>Skoda</p>
            <p>volkswagen</p>
            <p>Maruthi suziki</p>
            <p>Tata</p>
            <p>Tayota</p>
            <p>Hyundai</p>
            <p>Honda</p>
          </div>
        </div>
        <div className="footer2">
          <div className="footer2-sub">
            <div className="logo-title">
              <div className="footer-logo">
                <img src={logo} />
              </div>
              <h1>CAR BAY</h1>
            </div>
            <div className="Address">
              <h1>INDIA - HEADQUARTERS</h1>
              <p>
                Plot No. 23, Survey No. 11/7,100 Ft Road, Ayyappa
                SocietyMadhapur Hyderabad,Telangana 500081
              </p>
            </div>
            <div className="social-media">
              <img src={facebook} alt="facebook" />
              <img src={instagram} alt="instagram" />
              <img src={linkedin} alt="linkedin" />
              <img src={twitter} alt="x" />
              <img src={youtube} alt="youtube" />
            </div>
          </div>
          <div className="footer-sub-details">
            <div>
              <p>Email</p>
              <p>viplava@carz.in</p>
            </div>
            <div>
              <p>Phone Number</p>
              <p>+91 90307 24365</p>
            </div>
            <div>
              <p>Working Days</p>
              <p>Monday-Sunday</p>
            </div>
            <div>
              <p>Working Hours</p>
              <p>07-00AM - 09:00PM (IST)</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
