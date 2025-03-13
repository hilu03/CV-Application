function SkillInput({info, setInfo, id, allInfo}) {
  return (
    <form>
      <div className="input-container">
        <label htmlFor="skill-name">Skill name</label>
        <input type="text" id="skill-name" value={info && info.name} onChange={(e) => {
          allInfo[id].name = e.target.value;
          setInfo(allInfo.map(item => item)); 
        }}/>
      </div>
      <div className="input-container">
        <label htmlFor="skill-description">Description</label>
        <input type="text" id="skill-description" value={info && info.description} onChange={(e) => {
          allInfo[id].description = e.target.value;
          setInfo(allInfo.map(item => item)); 
        }}/>
      </div>
    </form>
  );
}

export default SkillInput;