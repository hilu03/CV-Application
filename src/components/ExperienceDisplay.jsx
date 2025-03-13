import "../styles/ExperienceDisplay.css";

function ExperienceDisplay({info}) {
  return (
    <div className="experience-container">
      <div className="left-side">
        <h3 className="company">{info && info.company}</h3>
        <p>{info && info.start} {info.end.length > 0 && ` - ${info.end}`}</p>
      </div>
      <div className="right-side">
        <div className="dot"></div>
        <p className="position">{info && info.position}</p>
        <ul>
          {info.description && info.description.map(r => <li>{r}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default ExperienceDisplay;