// src/pages/Gallery.tsx
import Navbar from './Navbar.tsx';
import './Gallery.css'; // 1. นำเข้า CSS ที่เราจะสร้างใหม่
import { Link } from 'react-router-dom'; // 2. นำเข้า Link สำหรับการนำทาง (ดีกว่า <a>)

// 3. สร้างข้อมูลจำลอง (Mock Data) สำหรับรูปภาพ
// ในอนาคต คุณสามารถแทนที่ส่วนนี้ด้วยข้อมูลจริงที่มาจาก API หรือไฟล์
const galleryItems = [
  {
    id: 1,
    title: 'กิจกรรมรับน้อง',
    description: 'ภาพบรรยากาศสนุกสนานในกิจกรรมรับน้องปี 2568',
    imageUrl: 'https://เด็กฝึกงาน.com/media/cache/resolve/strip/cms/media/post-44/347.jpg',
  },
  {
    id: 2,
    title: 'งานประกวดโครงงาน',
    description: 'นำเสนอโปรเจกต์ IoT ในงานประกวดนวัตกรรม',
    imageUrl: 'https://www.kc.ac.th/wp-content/uploads/2023/11/3-14.jpg',
  },
  {
    id: 3,
    title: 'ทริปค่ายอาสา',
    description: 'ร่วมกันสร้างสนามเด็กเล่นให้กับโรงเรียนบนดอย',
    imageUrl: 'https://www.thaipr.net/wp-content/uploads/2020/12/%E0%B8%99%E0%B8%AA%E0%B8%9E.%E0%B8%84%E0%B9%88%E0%B8%B2%E0%B8%A2%E0%B8%AD%E0%B8%B2%E0%B8%AA%E0%B8%B2-6d344ec4.jpg',
  },
  {
    id: 4,
    title: 'แข่งขันกีฬา',
    description: 'ภาพจากการแข่งขันฟุตบอลประจำคณะ',
    imageUrl: 'https://www.matichon.co.th/wp-content/uploads/2019/07/445564.jpg',
  },
  {
    id: 5,
    title: 'Workshop เขียนโค้ด',
    description: 'บรรยากาศการเรียนรู้ React และ TypeScript',
    imageUrl: 'https://via.placeholder.com/400x300/3B82F6/FFFFFF?text=Coding+Workshop',
  },
  {
    id: 6,
    title: 'งานสัมมนา',
    description: 'เข้าร่วมฟังบรรยายพิเศษด้าน AI',
    imageUrl: 'https://via.placeholder.com/400x300/8B5CF6/FFFFFF?text=AI+Seminar',
  },
];

function Gallery() {
  return (
    <>
      <Navbar />

      {/* ใช้ class จาก Gallery.css แทน inline styles 
        เพื่อให้โค้ดสะอาดตาและจัดการง่ายขึ้น
      */}
      <main className="gallery-page-container">
        
        {/* ส่วนหัวของหน้า */}
        <section id="gallery-header" className="gallery-header">
          <h1>My Activity Gallery</h1>
          <p>
            รวบรวมภาพถ่ายจากกิจกรรมและโปรเจกต์ต่างๆ ที่ฉันได้เข้าร่วม
          </p>
        </section>

        {/* 4. แสดงผล Grid โดยใช้ .map() */}
        <section id="gallery-content" className="gallery-grid">
          
          {/* วนลูปข้อมูลรูปภาพมาสร้างการ์ด */}
          {galleryItems.map((item) => (
            <article key={item.id} className="gallery-card">
              {/* รูปภาพกิจกรรม */}
              <img 
                src={item.imageUrl} 
                alt={item.title} 
                className="gallery-card-image" 
              />
              {/* คำบรรยายใต้ภาพ */}
              <div className="gallery-card-caption">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}

        </section>

        {/* 5. ปุ่มกลับหน้าหลัก (ใช้ Link) */}
        <div className="back-to-home">
          <Link to="/home" className="back-to-home-btn">
            กลับไปหน้าหลัก
          </Link>
        </div>

      </main>
    </>
  );
}

export default Gallery;