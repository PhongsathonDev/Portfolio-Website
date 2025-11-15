// Navbar.js
import './Navbar.css';
import { BsImage, BsWallet2 } from 'react-icons/bs'; // Import ไอคอน

function Navbar() {
  return (
    <nav className="navbar-container">
      {/* 1. โลโก้ */}
      <a href="#/home" className="navbar-logo">
        HOME
      </a>

      {/* 2. ลิงก์เมนูหลัก */}
      <div className="navbar-links">
        <a href="#/gallery">GALLERY</a> {/* อัปเดต href เพื่อนำทางไปหน้า Gallery */}
        <a href="#/vision">VISION</a>
        <a href="#/quests">QUESTS</a>
        <a href="#/artists">ARTISTS</a>
        <a href="#/claim">CLAIM</a>
      </div>

      {/* 3. ส่วนด้านขวา (ไอคอน, ปุ่ม Connect) */}
      <div className="navbar-actions">
        <a href="/user-gallery" className="action-icon">
          <BsImage size={22} />
        </a>
        <button className="connect-wallet-btn">
          <span>CONNECT</span>
          <BsWallet2 size={20} />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;