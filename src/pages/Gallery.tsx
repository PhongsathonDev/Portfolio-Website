import Navbar from './Navbar.tsx';

function Gallery() {
  return (
    <>
      <Navbar />

      <main style={{ paddingTop: '80px', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        <section id="gallery-header" style={{ padding: '3rem 1.5rem', maxWidth: '800px' }}>
          <h1 style={{ fontSize: '3rem', fontWeight: 700, margin: '0 0 1rem' }}>
            My Project Gallery
          </h1>
          <p style={{ fontSize: '1.2rem', opacity: 0.8 }}>
            รวบรวมผลงานและโปรเจกต์ที่น่าสนใจทั้งหมดของฉัน
          </p>
        </section>

        {/* Placeholder สำหรับแสดงรายการรูปภาพ/โปรเจกต์ */}
        <section
          id="gallery-content"
          style={{
            padding: '2rem 1.5rem',
            maxWidth: '1200px',
            width: '100%',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            margin: '0 auto',
          }}
        >
          <div className="gallery-item" style={{ backgroundColor: '#1e293b', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
            <h3>Project One Title</h3>
            <p>A brief description of the first project's core functionality.</p>
            <span style={{ fontSize: '0.9rem', color: '#94a3b8' }}>Tags: Web App, React</span>
          </div>
          <div className="gallery-item" style={{ backgroundColor: '#1e293b', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
            <h3>Project Two Title</h3>
            <p>A brief description of the second project's core functionality.</p>
            <span style={{ fontSize: '0.9rem', color: '#94a3b8' }}>Tags: Mobile UI, Design</span>
          </div>
          <div className="gallery-item" style={{ backgroundColor: '#1e293b', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
            <h3>Project Three Title</h3>
            <p>A brief description of the third project's core functionality.</p>
            <span style={{ fontSize: '0.9rem', color: '#94a3b8' }}>Tags: Full-Stack, API</span>
          </div>
          
        </section>
        
        <div style={{ margin: '3rem' }}>
            <a 
                href="/home#projects" 
                style={{
                    padding: '0.75rem 1.5rem',
                    borderRadius: '999px',
                    border: '1px solid #2563eb',
                    background: 'transparent',
                    color: '#2563eb',
                    cursor: 'pointer',
                    fontWeight: 500,
                    textDecoration: 'none',
                }}
            >
                กลับไปหน้าหลัก
            </a>
        </div>
      </main>
    </>
  );
}

export default Gallery;