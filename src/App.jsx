import Generallnput from "./components/Generallnput.jsx";
import GeneralDisplay from "./components/GeneralDisplay.jsx";
import EducationDisplay from "./components/EducationDisplay.jsx";
import ExperienceDisplay from "./components/ExperienceDisplay.jsx";
import InputMenu from "./components/InputMenu.jsx";
import Item from "./components/Item.jsx";
import "./styles/App.css";
import "./styles/Input.css";
import { data } from "./exampleData.js";
import { useState } from "react";
import { FiPlusCircle } from "react-icons/fi";

function App() {
  const [generalInfo, setGeneralInfo] = useState(data.general);
  const [education, setEducation] = useState(data.education);
  const [experience, setExperience] = useState(data.experience);

  return (
    <div className="container">
      <div>
        <InputMenu title={"General Info"}>
          <Generallnput info={generalInfo} setInfo={setGeneralInfo}/>
        </InputMenu>
        <InputMenu title={"Education"}>
          {education.map((ed, id) => {
            return <Item itemType={"edu"} key={id} id={id} name={ed.school} allInfo={education} info={ed} setInfo={setEducation}/>
          })}
          <div className="add-button-container">
            <FiPlusCircle  className="add-button" onClick={() => {
              education.push({
                "school": "School name",
                "degree": "Your degree",
                "start": "yyyy",
                "end": "yyyy"
              });
              setEducation(education.map(e => e));
            }}/>
          </div>
        </InputMenu>
        <InputMenu title={"Experience"}>
          {experience.map((ex, id) => {
            return <Item itemType={"ex"} key={id} id={id} name={ex.company} allInfo={experience} info={ex} setInfo={setExperience}/>
          })}
          <div className="add-button-container">
            <FiPlusCircle  className="add-button" onClick={() => {
              experience.push({
                "company": "Company name",
                "position": "Your position",
                "description": [
                  "Describe your experience...",
                  "Describe your experience..."
                ],
                "start": "yyyy",
                "end": "yyyy",
              });
              setExperience(experience.map(e => e));
            }}/>
          </div>
        </InputMenu>
      </div>

      <div className="display">
        <GeneralDisplay info = {generalInfo}/>
        <h2>Education</h2>
        {education.map(ed => {
          return <EducationDisplay info = {ed}/>
        })}
        <h2>Experience</h2>
        {experience.map(ex => {
          return <ExperienceDisplay info = {ex}/>
        })}
      </div>
    </div>
  );
}

export default App
