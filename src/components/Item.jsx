import { MdEdit, MdDelete } from "react-icons/md";
import "../styles/Item.css";
import EducationInput from "./input/EducationInput";
import ExperienceInput from "./input/ExperienceInput";
import SkillInput from "./input/SkillInput";
import { useState } from "react";

function Item({name, info, setInfo, id, allInfo, itemType}) {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <>
    <div className="item-container">
      <h4 className="name">{name}</h4>
      <div>
        <MdEdit className="edit-button" onClick={() => {
          setIsExpanded(!isExpanded);
        }}/>
        <MdDelete className="delete-button" onClick={() => {
          setInfo(allInfo.filter((_, i) => i !== id));
        }}/>
      </div>
    </div>
    {isExpanded  && itemType === "edu" && <EducationInput info={info} id={id} setInfo={setInfo} allInfo={allInfo}/>}
    {isExpanded  && itemType === "ex" && <ExperienceInput info={info} id={id} setInfo={setInfo} allInfo={allInfo}/>}
    {isExpanded  && itemType === "skill" && <SkillInput info={info} id={id} setInfo={setInfo} allInfo={allInfo}/>}
    </>
  );
}

export default Item;