function TechStrip() {
    const skills = [
      'React', 'JavaScript', 'HTML5', 'CSS3', 'Java',
      'Spring Boot', 'MySQL', 'Tailwind', 'Figma', 'Git',
    ];
  
    return (
      <div className="tech-strip">
        <div className="tech-track">
          {[...skills, ...skills].map((skill, i) => (
            <span className="tech-item" key={i}>
              {skill}
              <span className="tech-dot">•</span>
            </span>
          ))}
        </div>
      </div>
    );
  }
  
  export default TechStrip;