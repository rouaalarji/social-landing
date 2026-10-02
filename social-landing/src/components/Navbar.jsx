import { FaHome, FaUserFriends, FaFacebookMessenger, FaPlus, FaSearch, FaBars, FaBell } from 'react-icons/fa';
import { MdOutlineSlideshow } from 'react-icons/md';

function Navbar() {
  return (
    <div className="fb-navbar-dark">
      <div className="fb-toprow">
        <span className="fb-logo-text">Facebook</span>
        <div className="fb-toprow-icons">
          <button className="fb-round-btn">
            <FaPlus />
          </button>
          <button className="fb-round-btn">
            <FaSearch />
          </button>
          <button className="fb-round-btn">
            <FaBars />
          </button>
        </div>
      </div>

      <div className="fb-topbar">
        <button className="fb-icon-btn active">
          <FaHome />
        </button>

        <button className="fb-icon-btn">
          <FaUserFriends />
        </button>

        <button className="fb-icon-btn">
          <FaFacebookMessenger />
        </button>

        <button className="fb-icon-btn">
          <MdOutlineSlideshow />
        </button>

        <button className="fb-icon-btn">
          <FaBell />
        </button>

        <button className="fb-icon-btn">
          <FaBars />
          <span className="fb-badge">9</span>
        </button>
      </div>
    </div>
  );
}

export default Navbar;