// Home.js (ไฟล์ของคุณที่อัปเดตแล้ว)
import Navbar from './Navbar.tsx'; // 1. นำเข้า Navbar

function Home() {
  return (
    <>
      <Navbar /> {/* 2. เรียกใช้ Navbar ที่นี่ */}
      
      {/* เนื้อหาเดิมของคุณ */}
      <div style={{ paddingTop: '10px', textAlign: 'center' }}>
        {/* เพิ่ม padding-top เพื่อไม่ให้เนื้อหาจมอยู่ใต้ Navbar */}
        <h1>Welcome to the Home Page</h1>
        <p>เนื้อหาอื่นๆ ของหน้าเว็บ...</p>
      </div>
    </>
  );
}

export default Home;