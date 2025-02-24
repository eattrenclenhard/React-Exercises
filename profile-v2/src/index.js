import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skillData = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    emoji: "🎈",
    color: "aqua",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    emoji: "✨",
    color: "orange",
  },
  {
    skill: "Web Design",
    level: "intermediate",
    emoji: "🎃",
    color: "orangered",
  },
  {
    skill: "Git and Github",
    level: "advanced",
    emoji: "🎉",
    color: "maroon",
  },
  {
    skill: "React",
    level: "beginner",
    emoji: "🎆",
    color: "green",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="avatar.png" alt="Uncle Sam" />;
}

function Intro() {
  return (
    <div>
      <h1>PAUL ATREIDES</h1>
      <p>
        I must not fear. Fear is the mind killer. Fear is the little death that
        brings total obliteration. I will face my fear. I will permit it to pass
        over me and through me. And when it has gone past I will turn the inner
        eye to see its path. Where the fear has gone there will be nothing. Only
        I will remain.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="HTML+CSS" emoji="🎈" color="aqua" />
      {skillData.map((item) => {
        return (
          <Skill
            skill={item.skill}
            level={item.level}
            color={item.color}
            key={item.skill}
          />
        );
      })}
    </div>
  );
}

function Skill({ skill, level, color }) {
  console.log("current skill is");
  console.log(skill, level, color);

  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>{level === "beginner" && "👶"}</span>
      <span>{level === "intermediate" && "👍"}</span>
      <span>{level === "advanced" && "💪"}</span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
