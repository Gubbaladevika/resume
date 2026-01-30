import './App.css';

function App() {
  return (
    <div style={{
      maxWidth: "800px",
      margin: "40px auto",
      padding: "20px",
      fontFamily: "Calibri, Arial",
      lineHeight: "1.6"
    }}>

      {/* Name & Contact */}
      <h1 style={{ marginBottom: "5px" }}>
        Gubbala Devika Lakshmi
      </h1>
      <p style={{ marginTop: "0" }}>
        Email: gubbaladevika65@gmail.com<br />
        Phone: 9493788058
      </p>

      {/* Career Objective */}
      <h3>CAREER OBJECTIVE</h3>
      <p>MCA student seeking an entry-level opportunity to apply
        basic knowledge of web development technologies and to
        grow as a software professional while contributing to
        organizational goals. </p>

      {/* Education */}
      <h3>EDUCATION</h3>
      <p>Master of Computer Applications-(MCA)[Pursuing]</p>
      <p>Bachelor of Science-Pragati Degree College[2024]</p>
      <p>Intermediate-Vijaya gayatri junior college[2020]</p>
      <p>Ssc-Durga prasad school[2017]</p>

      {/* Skills */}
      <h3>SKILLS / TECHNOLOGIES</h3>
      <ul>
        <li>HTML, CSS (Basic)</li>
        <li>React (Basic)</li>
        <li>Python (Basic)</li>
        <li>Git & GitHub</li>
        <li>Vercel Deployment</li>
      </ul>

      {/* Projects */}
      <h3>PROJECTS</h3>
      <p>
        <b>Personal Resume Website</b><br />
         Developed a personal resume website using React<br />
         Uploaded code to GitHub and deployed using Vercel
      </p>

      {/* Certifications */}
      <h3>CERTIFICATIONS</h3>
      <p>Cisco Networking Academy- C Essentials</p>
      <p>Cisco Networking Academy- Python Essentials</p>
      <p>Currently learning Web Development and React</p>
      {/* Languages known*/}
      <h3>LANGUAGES KNOWN</h3>
        <p>Telugu</p>
        <p>English</p>

    </div>
  );
}

export default App;
