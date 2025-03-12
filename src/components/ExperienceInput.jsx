import { RiDeleteBack2Fill } from "react-icons/ri";
import { IoMdAddCircleOutline } from "react-icons/io";

function ExperienceInput({info, setInfo, id, allInfo}) {
  return (
    <form>
      <div className="input-container">
        <label htmlFor="company-name">Company</label>
        <input type="text" id="company-name" value={info.company} onChange={(e) => {
          allInfo[id].company = e.target.value;
          setInfo(allInfo.map(item => item)); 
        }}/>
      </div>
      <div className="input-container">
        <label htmlFor="position">Position</label>
        <input type="text" id="position" value={info.position} onChange={(e) => {
          allInfo[id].position = e.target.value;
          setInfo(allInfo.map(item => item)); 
        }}/>
      </div>
      <div className="description-container">
        <div className="desc-add">
         <p>Description</p>  
         <IoMdAddCircleOutline  className="add-desc-button" onClick={() => {
          allInfo[id].description.push("Describe your experience...");
          setInfo(allInfo.map(item => item));
         }}/>
        </div>
        <div className="description-input-container">
          {info.description && info.description.map((desc, index) => {
            return (
              <div className="description-input">
                <input type="text" key={index} value={desc} onChange={(e) => {
                  allInfo[id].description[index] = e.target.value;
                  setInfo(allInfo.map(item => item)); 
                }}/>
                <RiDeleteBack2Fill className="remove-button" onClick={() => {
                  allInfo[id].description = allInfo[id].description.filter((_, i) => i !== index);
                  setInfo(allInfo.map(item => item)); 
                }}/>
              </div>
            );
          })}
        </div>
      </div>
      <div className="input-container">
        <label htmlFor="start">Start date</label>
        <input type="text" id="start" value={info.start} onChange={(e) => {
          allInfo[id].start = e.target.value;
          setInfo(allInfo.map(item => item)); 
        }}/>
      </div>
      <div className="input-container">
        <label htmlFor="end">End date</label>
        <input type="text" id="end" value={info.end} onChange={(e) => {
          allInfo[id].end = e.target.value;
          setInfo(allInfo.map(item => item)); 
        }}/>
      </div>
    </form>
  );
}

export default ExperienceInput;