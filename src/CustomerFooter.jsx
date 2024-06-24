import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import {
  IoCallOutline,
  IoLocationOutline,
  IoMailOutline,
} from "react-icons/io5";

function CustomerFooter() {
  return (
    <footer>
      <div className='footer-category'>
        <div className='container'>
          <h2 className='footer-category-title'>Brand directory</h2>
          <div className='footer-category-box'>
            <h3 className='category-box-title'>ANTIQUE IDOL :</h3>
            <a href='#' className='footer-category-link'>
              Ganesh Idol
            </a>
            <a href='#' className='footer-category-link'>
              Saraswathi idol{" "}
            </a>
          </div>
          <div className='footer-category-box'>
            <h3 className='category-box-title'>BOWLS :</h3>
            <a href='#' className='footer-category-link'>
              3 graver Dish bowl
            </a>
            <a href='#' className='footer-category-link'>
              Mattu dish bowl
            </a>
          </div>
          <div className='footer-category-box'>
            <h3 className='category-box-title'>PLATES :</h3>
            <a href='#' className='footer-category-link'>
              Beed plate 5.5 inches{" "}
            </a>
            <a href='#' className='footer-category-link'>
              Beed plate 8 inches
            </a>
          </div>
          <div className='footer-category-box'>
            <h3 className='category-box-title'>POOJA SETS :</h3>
            <a href='#' className='footer-category-link'>
              Diya
            </a>
            <a href='#' className='footer-category-link'>
              Aarthi stand{" "}
            </a>
          </div>
          <div className='footer-category-box'>
            <h3 className='category-box-title'>WATCHES :</h3>
            <a href='#' className='footer-category-link'>
              Model1
            </a>
            <a href='#' className='footer-category-link'>
              Model2
            </a>
          </div>
        </div>
      </div>
      <div className='footer-nav'>
        <div className='container'>
          <ul className='footer-nav-list'>
            <li className='footer-nav-item'>
              <h2 className='nav-title'>Our Company</h2>
            </li>
            <li className='footer-nav-item'>
              <a href='#' className='footer-nav-link'>
                Delivery
              </a>
            </li>
            <li className='footer-nav-item'>
              <a href='#' className='footer-nav-link'>
                Legal Notice
              </a>
            </li>
            <li className='footer-nav-item'>
              <a href='#' className='footer-nav-link'>
                Terms and conditions
              </a>
            </li>
            <li className='footer-nav-item'>
              <a href='#' className='footer-nav-link'>
                About us
              </a>
            </li>
            <li className='footer-nav-item'>
              <a href='#' className='footer-nav-link'>
                Secure payment
              </a>
            </li>
          </ul>
          <ul className='footer-nav-list'>
            <li className='footer-nav-item'>
              <h2 className='nav-title'>Services</h2>
            </li>
            <li className='footer-nav-item'>
              <a href='#' className='footer-nav-link'>
                Prices drop
              </a>
            </li>
            <li className='footer-nav-item'>
              <a href='#' className='footer-nav-link'>
                New products
              </a>
            </li>
            <li className='footer-nav-item'>
              <a href='#' className='footer-nav-link'>
                Best sales
              </a>
            </li>
            <li className='footer-nav-item'>
              <a href='#' className='footer-nav-link'>
                Contact us
              </a>
            </li>
            <li className='footer-nav-item'>
              <a href='#' className='footer-nav-link'>
                Sitemap
              </a>
            </li>
          </ul>
          <ul className='footer-nav-list'>
            <li className='footer-nav-item'>
              <h2 className='nav-title'>Contact</h2>
            </li>
            <li className='flex footer-nav-item'>
              <div className='icon-box'>
                <IoLocationOutline />
              </div>
              <address className='content'>
                419 State 414 Rte Beaver Dams, New York(NY), 14812, USA
              </address>
            </li>
            <li className='flex footer-nav-item'>
              <div className='icon-box'>
                <IoCallOutline />
              </div>
              <a href='tel:+607936-8058' className='footer-nav-link'>
                (607) 936-8058
              </a>
            </li>
            <li className='flex footer-nav-item'>
              <div className='icon-box'>
                <IoMailOutline />
              </div>
              <a href='mailto:example@gmail.com' className='footer-nav-link'>
                example@gmail.com
              </a>
            </li>
          </ul>
          <ul className='footer-nav-list'>
            <li className='footer-nav-item'>
              <h2 className='nav-title'>Follow Us</h2>
            </li>
            <li>
              <ul className='social-link'>
                <li className='footer-nav-item'>
                  <a href='#' className='footer-nav-link'>
                    <FaFacebook />
                  </a>
                </li>
                <li className='footer-nav-item'>
                  <a href='#' className='footer-nav-link'>
                    <FaTwitter />
                  </a>
                </li>
                <li className='footer-nav-item'>
                  <a href='#' className='footer-nav-link'>
                    <FaLinkedin />
                  </a>
                </li>
                <li className='footer-nav-item'>
                  <a href='#' className='footer-nav-link'>
                    <FaInstagram />
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div className='footer-bottom'>
        <div className='container'>
          <img
            src='./assets/images/payment.png'
            alt='payment method'
            className='payment-img'
          />
          <p className='copyright'>
            Copyright &copy; NST all rights reserved.
            <br />
            Devloped by <a href='www.lubosoft.com'>LUBOSOFTS</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default CustomerFooter;
