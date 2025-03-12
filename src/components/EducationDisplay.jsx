function EducationDisplay({info}) {
  return (
    <div>
      <h3>{info.school}</h3>
      <p>{info.start} {info.end.length > 0 && ` - ${info.end}`}</p>
      <p>{info.degree}</p>
    </div>
  );
}

export default EducationDisplay;