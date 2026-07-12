import { useState } from 'react';

const REPO = 'MSubham06/PortfolioSigmaFSD';
const INITIAL_COUNT = 4;

const modules = [
  { id: 'M24', title: 'Module topic name here', description: 'Small description about the module, what I did and learned.' },
  { id: 'M23', title: 'Module topic name here', description: 'Small description about the module, what I did and learned.' },
  { id: 'M22', title: 'Module topic name here', description: 'Small description about the module, what I did and learned.' },
  { id: 'M21', title: 'Module topic name here', description: 'Small description about the module, what I did and learned.' },
  { id: 'M20', title: 'Module topic name here', description: 'Small description about the module, what I did and learned.' },
  { id: 'M19', title: 'Module topic name here', description: 'Small description about the module, what I did and learned.' },
  { id: 'M18', title: 'Module topic name here', description: 'Small description about the module, what I did and learned.' },
  { id: 'M17', title: 'Module topic name here', description: 'Small description about the module, what I did and learned.' },
  { id: 'M16', title: 'Module topic name here', description: 'Small description about the module, what I did and learned.' },
  { id: 'M15', title: 'Module topic name here', description: 'Small description about the module, what I did and learned.' },
  { id: 'M14', title: 'Module topic name here', description: 'Small description about the module, what I did and learned.' },
  { id: 'M13', title: 'Module topic name here', description: 'Small description about the module, what I did and learned.' },
  { id: 'M12', title: 'Module topic name here', description: 'Small description about the module, what I did and learned.' },
  { id: 'M11', title: 'Module topic name here', description: 'Small description about the module, what I did and learned.' },
  { id: 'M10', title: 'Module topic name here', description: 'Small description about the module, what I did and learned.' },
  { id: 'M9', title: 'Module topic name here', description: 'Small description about the module, what I did and learned.' },
  { id: 'M0-8', title: 'Module topic name here', description: 'Small description about the module, what I did and learned.' },
];

function CodeJourney() {
  const [expanded, setExpanded] = useState(false);
  const visibleModules = expanded ? modules : modules.slice(0, INITIAL_COUNT);

  return (
    <section id="code" className="code-journey">
      <div className="cj-inner">
        <p className="eyebrow">Code Repository</p>
        <h2>My Code Journey</h2>
        <p className="cj-sub">
          Every module I complete gets pushed here, newest first.
        </p>

        <div className="cj-grid">
          {visibleModules.map(function (mod) {
            const moduleUrl = 'https://github.com/' + REPO + '/tree/main/modules/' + mod.id;
            return (
              <div className="cj-card" key={mod.id}>
                <span className="cj-card-num">{mod.id}</span>
                <span className="cj-card-label">Module</span>

                <p className="cj-card-title">
                  <span className="cj-card-title-label">Title: </span>
                  {mod.title}
                </p>

                <p className="cj-card-desc">
                  <span className="cj-card-desc-label">Description:</span>
                  <br />
                  {mod.description}
                </p>

                <a
                  className="cj-open-btn"
                  href={moduleUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Open Module
                </a>
              </div>
            );
          })}
        </div>

        {modules.length > INITIAL_COUNT && (
          <button
            className="cj-toggle"
            onClick={function () {
              setExpanded(!expanded);
            }}
          >
            {expanded ? 'View Less' : 'View More (' + (modules.length - INITIAL_COUNT) + ')'}
          </button>
        )}
      </div>
    </section>
  );
}

export default CodeJourney;