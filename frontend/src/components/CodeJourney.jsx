import { useState } from 'react';

const REPO = 'MSubham06/PortfolioSigmaFSD';
const INITIAL_COUNT = 4;

const modules = [
  { id: 'M24', title: 'Array Methods (map, filter, reduce)', description: 'Working with array transformations using map, filter, reduce, every, and sum plus finding max values and setting default parameters in functions.' },
  { id: 'M23', title: 'this Keyword & Arrow Functions', description: 'Understanding how the this keyword behaves in regular vs arrow functions, try/catch error handling, setTimeout and setInterval, and implicit returns.' },
  { id: 'M22', title: 'JS Functions Deep Dive', description: 'Defining functions, working with arguments and return values, exploring variable scope, and understanding how functions structure JavaScript logic.' },
  { id: 'M21', title: 'JS Objects & Literals', description: 'Creating and working with object literals getting and updating values, nested objects, arrays of objects, and the built in Math object.' },
  { id: 'M20', title: 'JS Loops & Arrays', description: 'For loops, while loops, nested loops, and practical loop exercises like printing odd/even numbers and multiplication tables, plus intro to arrays.' },
  { id: 'M19', title: 'JS Strings & String Methods', description: 'String manipulation methods trim, slice, replace, method chaining, case conversion, and searching within strings using indexOf.' },
  { id: 'M18', title: 'JavaScript Basics — Variables & Console', description: 'The starting point for JS: variables, data types, numbers, operators, comparison, and conditional statements (if/else, else if).' },
  { id: 'M17', title: 'Spotify Clone (CSS Project)', description: 'A full frontend clone of the Spotify web player building a real world layout with a sidebar, playback bar, and card based UI purely in HTML/CSS.' },
  { id: 'M16', title: 'Bootstrap Components', description: 'Getting hands on with Bootstrap containers, buttons, badges, alerts, navbars, cards, and grid layout for fast, responsive UI building.' },
  { id: 'M15', title: 'Mini Project, Styling Practice', description: 'A smaller styling project pulling together color theory, typography, icons, and interactive hover effects into one cohesive design.' },
  { id: 'M14', title: 'CSS Grid & Animations', description: 'Introduction to CSS Grid templates, rows, columns, gaps combined with keyframe animations to bring layouts to life.' },
  { id: 'M13', title: 'Flexbox Fundamentals', description: 'Core Flexbox concepts: display flex, direction, justify/align content, wrapping, and sizing the backbone of modern responsive layouts.' },
  { id: 'M12', title: 'CSS Transitions & Effects', description: 'Adding polish with opacity, transitions, and CSS transforms rotate, scale, translate, and skew plus box shadows for depth.' },
  { id: 'M11', title: 'Borders, Radius & Transforms', description: 'Working with box model borders and border radius, alongside padding and margin, to shape and space elements precisely.' },
  { id: 'M10', title: 'Box Model & Sizing', description: 'Deep dive into the CSS box model width, height, and how borders and spacing come together to control element sizing.' },
  { id: 'M9', title: 'CSS Selectors Deep Dive', description: 'Going beyond the basics universal, element, ID, and class selectors, plus descendant and sibling combinators for precise targeting.' },
  { id: 'M0-8', title: 'Html and CSS getting started', description: 'The foundation module core HTML structure and semantic tags, plus the first CSS concepts: selectors, colors, and basic styling to bring static pages to life.' },
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