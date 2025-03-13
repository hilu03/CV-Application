import Generallnput from "./components/input/Generallnput.jsx";
import GeneralDisplay from "./components/display/GeneralDisplay.jsx";
import EducationDisplay from "./components/display/EducationDisplay.jsx";
import ExperienceDisplay from "./components/display/ExperienceDisplay.jsx";
import SkillDisplay from "./components/display/SkillDisplay.jsx";
import InputMenu from "./components/input/InputMenu.jsx";
import Item from "./components/Item.jsx";
import Credit from "./components/Credit.jsx";
import "./styles/App.css";
import "./styles/Input.css";
import { data, emptyData } from "./data.js";
import { useState } from "react";
import { FiPlusCircle } from "react-icons/fi";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

function App() {
  const [generalInfo, setGeneralInfo] = useState(data.general);
  const [education, setEducation] = useState(data.education);
  const [skills, setSkills] = useState(data.skills);
  const [experience, setExperience] = useState(data.experience);

  return (
    <div className="container">
      <div>
        <Credit/>
        <div className="button-group">
          <button className="clear-button" onClick={() => {
            setGeneralInfo(emptyData.general);
            setEducation(emptyData.education);
            setSkills(emptyData.skills);
            setExperience(emptyData.experience);
          }}>Clear</button>
          <button className="load-template-button" onClick={() => {
            setGeneralInfo(data.general);
            setEducation(data.education);
            setSkills(data.skills);
            setExperience(data.experience);
          }}>Load template</button>
          <button className="download-button" onClick={() => {
            const displayElement = document.querySelector(".display");

            html2canvas(displayElement, { scale: 2 }).then((canvas) => {
              const imgData = canvas.toDataURL("image/png");
              const pdf = new jsPDF("p", "mm", "a4");
              const imgWidth = 210; // Chiều rộng A4 (mm)
              const imgHeight = (canvas.height * imgWidth) / canvas.width;
        
              pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
              pdf.save("CV.pdf");
            });
          }}>Download</button>
          <select name="font" id="font" onChange={(e) => {
            document.body.style.fontFamily = e.target.value;
          }}>
            <option value="Arial">Arial</option>
            <option value="Cambria">Cambria</option>
            <option value="Time New Roman" selected>Time New Roman</option>
            <option value="Roboto">Roboto</option>
          </select>
        </div>
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
        <InputMenu title={"Skills"}>
          {skills.map((skill, id) => {
            return <Item itemType={"skill"} key={id} id={id} name={skill.name} allInfo={skills} info={skill} setInfo={setSkills}/>
          })}
          <div className="add-button-container">
            <FiPlusCircle  className="add-button" onClick={() => {
              skills.push({
                "name": "Skill name",
                "description": "Skill description"
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
        <div className="row">
          <div className="column">
            <h2>Education</h2>
            {education.map(ed => {
              return <EducationDisplay info = {ed}/>
            })}
          </div>
          <div className="column">
            <h2>Skills</h2>
              {skills.map(skill => {
                return <SkillDisplay info = {skill}/>
              })}
          </div>
        </div>
        <h2>Experience</h2>
        {experience.map(ex => {
          return <ExperienceDisplay info = {ex}/>
        })}
      </div>
    </div>
  );
}

export default App
