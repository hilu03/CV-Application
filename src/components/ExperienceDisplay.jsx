function ExperienceDisplay({info}) {
  return (
    <div>
      <h3>{info && info.company}</h3>
      <p>{info && info.start} {info.end.length > 0 && ` - ${info.end}`}</p>
      <p>{info && info.position}</p>
      <ul>
       {info.description && info.description.map(r => <li>{r}</li>)}
      </ul>
    </div>
  );
}

export default ExperienceDisplay;