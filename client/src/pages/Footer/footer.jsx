import "./footer.css";
import logo from "../../assets/Images/logo-1.jpeg";
import facebook from "../../assets/Images/facebook.jpeg";
import twitter from "../../assets/Images/twitter.jpeg";
import youtube from "../../assets/Images/youtube.jpeg";
import instagram from "../../assets/Images/instagram.jpeg";
import linkedin from "../../assets/Images/linkedin.jpeg";
import { Navigate, useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate()
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
            <p onClick={()=>navigate('/services')}>General service</p>
            <p onClick={()=>{navigate('/services')}}>Denting & painting</p>
            <p onClick={()=>{navigate('/services')}}>AC & Electrical repairs</p>
            <p onClick={()=>{navigate('/services')}}>General health checkup</p>
            <p onClick={()=>{navigate('/services')}}>Battery & Tyre service</p>
            <p onClick={()=>{navigate('/services')}}>Door step service</p>
            <p onClick={()=>{navigate('/services')}}>PPF & Ceramic service</p>
          </div>
          <div className="footer-sub">
            <h1>LUXARY BRANDS</h1>
            <p onClick={()=>{navigate('/services')}}>Jaguar</p>
            <p onClick={()=>{navigate('/services')}}>Porsche</p>
            <p onClick={()=>{navigate('/services')}}>Rolls Royce</p>
            <p onClick={()=>{navigate('/services')}}>Ferrari</p>
            <p onClick={()=>{navigate('/services')}}>Land Rover</p>
            <p onClick={()=>{navigate('/services')}}>Mercedes</p>
            <p onClick={()=>{navigate('/services')}}>BMW</p>
            <p onClick={()=>{navigate('/services')}}>Audi</p>
            <p onClick={()=>{navigate('/services')}}>Volvo</p>
            <p onClick={()=>{navigate('/services')}}>Mitsubishi</p>
          </div>
          <div className="footer-sub">
            <h1 onClick={()=>{navigate('/services')}}>POPULAR BRANDS</h1>
            <p onClick={()=>{navigate('/services')}}>Mahindra</p>
            <p onClick={()=>{navigate('/services')}}>Renault</p>
            <p onClick={()=>{navigate('/services')}}>Fiat</p>
            <p onClick={()=>{navigate('/services')}}>Kia</p>
            <p onClick={()=>{navigate('/services')}}>Skoda</p>
            <p onClick={()=>{navigate('/services')}}>volkswagen</p>
            <p onClick={()=>{navigate('/services')}}>Maruthi suziki</p>
            <p onClick={()=>{navigate('/services')}}>Tata</p>
            <p onClick={()=>{navigate('/services')}}>Tayota</p>
            <p onClick={()=>{navigate('/services')}}>Hyundai</p>
            <p onClick={()=>{navigate('/services')}}>Honda</p>
          </div>
        </div>
        <div className="footer2">
          <div className="footer2-sub">
            <div>
              <div className="logo-title">
                <div className="footer-logo">
                  <img src={logo} />
                </div>
                {/* <h1>CAR BAY</h1> */}
              </div>
              
            
            </div>
           <div>
            <div className="Address">
              <h1>INDIA - HEADQUARTERS</h1>
              <p>
                Plot No. 23, Survey No. 11/7,100 Ft Road, Ayyappa
                SocietyMadhapur Hyderabad,Telangana 500081
              </p>
            </div>
            <div className="social-media">
                
                <img src={instagram} alt="instagram" />
                <img src={linkedin} alt="linkedin" />
                <img className="facebook" src={facebook} alt="facebook" />
                <img src={twitter} alt="x" />
                <img src={youtube} alt="youtube" />
              </div>
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
