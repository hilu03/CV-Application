function SkillDisplay({info, setInfo}) {
  return (
    <>
      <h3>{info.name}</h3>
      <ul>
        <li>{info.description}</li>
      </ul>
    </>
  );
}

export default SkillDisplay;