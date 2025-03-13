import "../../styles/EducationDisplay.css";

function EducationDisplay({info}) {
  return (
    <div>
      <div className="school-timeline">
        <h3 className="school">{info.school}</h3>
        <p className="timeline">{info.start} {info.end.length > 0 && ` - ${info.end}`}</p>
      </div>
      <div className="degree-gpa">
        <p className="degree">{info.degree}</p>
        {info.gpa && <p className="gpa">GPA: {info.gpa}</p>}
      </div>
    </div>
  );
}

export default EducationDisplay;