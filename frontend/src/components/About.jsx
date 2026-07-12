import myphoto2 from '../assets/Myphoto2.png';

function About() {
  return (
    <section id="about" className="about">
      <div className="about-inner">
        <div className="a1d">
          <img src={myphoto2} alt="Subham" />
        </div>
        <div className="a2d">
          <p className="ap1">
            <span className="abt-head">About Me</span>
            I'm a <b>Full Stack Web Developer</b> and final-year B.Tech CSE (AI & ML) student
            passionate about graphic design and editing. After <b>winning a hackathon</b>, I found
            my perfect fit in frontend development and have since gained strong hands-on skills to
            build complete frontends independently — without relying on AI-generated code.
          </p>
          <p className="ap2">
            <span className="abt-head">Sigma 7.0</span>
            I joined the <b>Sigma 7.0 Batch</b> to strengthen my fundamentals in Full Stack Web
            Development. The program deepened my understanding through practical projects and
            clear guidance, making it a great platform to learn both Web Development and DSA in
            Java or C++, though my main focus remains on web development.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;