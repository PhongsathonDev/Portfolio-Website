// src/pages/Home.tsx
import Navbar from './Navbar.tsx'; // 1. นำเข้า Navbar

function Home() {
  return (
    <>
      <Navbar />

      {/* ให้มี margin ด้านบนกันชนกับ Navbar */}
      <main style={{ paddingTop: '80px' }}>
        {/* HERO SECTION */}
        <section
          id="hero"
          style={{
            minHeight: '70vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '2rem 1.5rem',
          }}
        >
          <div style={{ maxWidth: '800px' }}>
            <p style={{ fontSize: '1rem', opacity: 0.7 }}>Portfolio ของ</p>
            <h1
              style={{
                fontSize: '2.5rem',
                fontWeight: 700,
                margin: '0.5rem 0 1rem',
              }}
            >
              Phongsathon Chaleesom
            </h1>
            <p style={{ fontSize: '1.1rem', opacity: 0.8 }}>
              Front-End / Full-Stack Developer ที่ชอบสร้างเว็บสวยๆ และใช้งานได้จริง
            </p>

            <div
              style={{
                marginTop: '2rem',
                display: 'flex',
                gap: '1rem',
                justifyContent: 'center',
                flexWrap: 'wrap',
              }}
            >
              <a
                href="#projects"
                style={{
                  padding: '0.75rem 1.5rem',
                  borderRadius: '999px',
                  border: 'none',
                  background: '#2563eb',
                  color: '#fff',
                  cursor: 'pointer',
                  fontWeight: 600,
                  textDecoration: 'none',
                }}
              >
                ดูผลงาน
              </a>
              <a
                href="#contact"
                style={{
                  padding: '0.75rem 1.5rem',
                  borderRadius: '999px',
                  border: '1px solid #2563eb',
                  background: '#fff',
                  color: '#2563eb',
                  cursor: 'pointer',
                  fontWeight: 500,
                  textDecoration: 'none',
                }}
              >
                ติดต่อ
              </a>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section
          id="about"
          style={{
            padding: '3rem 1.5rem',
            maxWidth: '900px',
            margin: '0 auto',
          }}
        >
          <h2
            style={{
              fontSize: '1.8rem',
              fontWeight: 700,
              marginBottom: '1rem',
              textAlign: 'center',
            }}
          >
            About Me
          </h2>
          <p style={{ lineHeight: 1.7, textAlign: 'center', opacity: 0.9 }}>
            ตอนนี้กำลังพัฒนาเว็บด้วย React / Vite และสนใจทั้งด้าน UI/UX,
            การเชื่อมต่อ API, และงานที่เกี่ยวกับ IoT/Automation
            เป้าหมายคือทำเว็บที่ทั้งดูดีและช่วยแก้ปัญหาในชีวิตจริงได้
          </p>

          <div
            style={{
              marginTop: '2rem',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1rem',
              justifyContent: 'center',
            }}
          >
            <span className="chip">React</span>
            <span className="chip">TypeScript</span>
            <span className="chip">Vite</span>
            <span className="chip">Tailwind / CSS</span>
            <span className="chip">Firebase / API</span>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section
          id="projects"
          style={{
            padding: '3rem 1.5rem',
            maxWidth: '1100px',
            margin: '0 auto',
          }}
        >
          <h2
            style={{
              fontSize: '1.8rem',
              fontWeight: 700,
              marginBottom: '1.5rem',
              textAlign: 'center',
            }}
          >
            Projects
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {/* การ์ดโปรเจกต์ 1 */}
            <article className="project-card">
              <h3>Thai Tax & Law Website</h3>
              <p>
                เว็บข้อมูลภาษีและกฎหมายไทย ดีไซน์อ่านง่าย
                มีหน้าอธิบายหัวข้อหลัก, บทความ และหน้าติดต่อ.
              </p>
              <ul>
                <li>React + Vite</li>
                <li>Responsive Design</li>
                <li>พื้นฐาน SEO</li>
              </ul>
              <div className="project-links">
                <a href="#" target="_blank">
                  Live Demo
                </a>
                <a href="#" target="_blank">
                  GitHub
                </a>
              </div>
            </article>

            {/* การ์ดโปรเจกต์ 2 */}
            <article className="project-card">
              <h3>Face Attendance System UI</h3>
              <p>
                หน้าเว็บ / dashboard สำหรับระบบเช็คชื่อด้วยใบหน้า
                แสดงสถิติและประวัติการเข้าใช้งาน.
              </p>
              <ul>
                <li>React + API</li>
                <li>Chart / Table</li>
                <li>ดีไซน์แบบ Dashboard</li>
              </ul>
              <div className="project-links">
                <a href="#" target="_blank">
                  Live Demo
                </a>
                <a href="#" target="_blank">
                  GitHub
                </a>
              </div>
            </article>

            {/* การ์ดโปรเจกต์ 3 */}
            <article className="project-card">
              <h3>Portfolio Website นี้</h3>
              <p>
                เว็บไซต์พอร์ตส่วนตัวสำหรับยื่นเข้ามหาวิทยาลัย
                รวมโปรเจกต์และข้อมูลตัวเองอย่างเป็นระบบ.
              </p>
              <ul>
                <li>Vite + React</li>
                <li>Component-based</li>
                <li>ปรับแต่งได้ง่าย</li>
              </ul>
              <div className="project-links">
                <a href="#" target="_blank">
                  Live Demo
                </a>
                <a href="#" target="_blank">
                  GitHub
                </a>
              </div>
            </article>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section
          id="contact"
          style={{
            padding: '3rem 1.5rem 4rem',
            maxWidth: '700px',
            margin: '0 auto',
            textAlign: 'center',
          }}
        >
          <h2
            style={{
              fontSize: '1.8rem',
              fontWeight: 700,
              marginBottom: '1rem',
            }}
          >
            Contact
          </h2>
          <p style={{ marginBottom: '1.5rem', opacity: 0.9 }}>
            ถ้าสนใจร่วมงานหรืออยากพูดคุยเรื่องโปรเจกต์ ลองติดต่อมาได้เลยนะคะ
          </p>

          <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>
            Email: <a href="mailto:youremail@example.com">youremail@example.com</a>
          </p>
          <p style={{ marginBottom: '2rem' }}>
            GitHub: <a href="https://github.com/your-github">your-github</a>
          </p>

          <a
            href="mailto:youremail@example.com"
            style={{
              padding: '0.75rem 1.5rem',
              borderRadius: '999px',
              border: 'none',
              background: '#16a34a',
              color: '#fff',
              cursor: 'pointer',
              fontWeight: 600,
              textDecoration: 'none',
            }}
          >
            ส่งอีเมลหาฉัน
          </a>
        </section>
      </main>
    </>
  );
}

export default Home;
