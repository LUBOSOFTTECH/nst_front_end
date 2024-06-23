import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { GoSearch } from "react-icons/go";
import {
  IoBagHandleOutline,
  IoHeartOutline,
  IoPersonOutline,
} from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function CustomerHeader() {
  const navigate = useNavigate();
  function handleProfileClick() {
    navigate("/admin/dashboard");
  }
  return (
    <header>
      <div className='header-top'>
        <div className='container'>
          <ul className='header-social-container'>
            <li>
              <a href='#' className='social-link'>
                <FaFacebook />
              </a>
            </li>
            <li>
              <a href='#' className='social-link'>
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href='#' className='social-link'>
                <FaInstagram />
              </a>
            </li>
            <li>
              <a href='#' className='social-link'>
                <FaLinkedin />
              </a>
            </li>
          </ul>
          <div className='header-alert-news'>
            <p>
              <b>Free Shipping</b>
              This Week Order Over - $55
            </p>
          </div>
          <div className='header-top-actions'>
            <select name='currency'>
              <option value='usd'>USD &dollar;</option>
              <option value='eur'>EUR &euro;</option>
            </select>
            <select name='language'>
              <option value='en-US'>India</option>
              <option value='es-ES'>Dubai</option>
              <option value='fr'>USA</option>
            </select>
          </div>
        </div>
      </div>
      <div className='header-main'>
        <div className='container'>
          <a href='#' className='header-logo'>
            <img
              src='./assets/images/logo/nst.png'
              alt="Anon's logo"
              width='120'
              height='50'
            />
          </a>
          <div className='header-search-container'>
            <input
              type='search'
              name='search'
              className='search-field'
              placeholder='Enter your product name...'
            />
            <button className='search-btn'>
              <GoSearch />
            </button>
          </div>
          <div className='header-user-actions'>
            <button className='action-btn' onClick={handleProfileClick}>
              <IoPersonOutline />
            </button>
            <button className='action-btn'>
              <IoHeartOutline />
              <span className='count'>0</span>
            </button>
            <button className='action-btn'>
              <IoBagHandleOutline />
              <span className='count'>0</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default CustomerHeader;
