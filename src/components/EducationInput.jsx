function EducationInput({info, setInfo, id, allInfo}) {
  return (
    <form>
      <div className="input-container">
        <label htmlFor="school-name">School name</label>
        <input type="text" id="school-name" value={info && info.school} onChange={(e) => {
          allInfo[id].school = e.target.value;
          setInfo(allInfo.map(item => item)); 
        }}/>
      </div>
      <div className="input-container">
        <label htmlFor="degree">Degree</label>
        <input type="text" id="degree" value={info && info.degree} onChange={(e) => {
          allInfo[id].degree = e.target.value;
          setInfo(allInfo.map(item => item)); 
        }}/>
      </div>
      <div className="input-container">
        <label htmlFor="start">Start date</label>
        <input type="text" id="start" value={info && info.start} onChange={(e) => {
          allInfo[id].start = e.target.value;
          setInfo(allInfo.map(item => item));  
        }}/>
      </div>
      <div className="input-container">
        <label htmlFor="end">End date</label>
        <input type="text" id="end" value={info && info.end} onChange={(e) => {
          allInfo[id].end = e.target.value;
          setInfo(allInfo.map(item => item));  
        }}/>
      </div>
    </form>
  );
}

export default EducationInput;