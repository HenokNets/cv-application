import { useState } from "react";
import EducationalExperience from "./components/EducationalExperience";
import GeneralInformation from "./components/GeneralInformation";
import PracticalExperience from "./components/PracticalExperience";

function App() {
  const [generalInfo, setGeneralInfo] = useState({});
  const [education, setEducation] = useState({});
  const [expInfo, setExpInfo] = useState({});
  return (
    <>
      <GeneralInformation setGeneralInfo={setGeneralInfo} />
      <EducationalExperience setEducation={setEducation} />
      <PracticalExperience setExpInfo={setExpInfo} />
      {Object.keys(generalInfo).length > 0 && (
        <section>
          <h2>General Information</h2>
          <p>Name: {generalInfo.name}</p>
          <p>Email: {generalInfo.email}</p>
          <p>Phone: {generalInfo.phone}</p>
        </section>
      )}

      {Object.keys(education).length > 0 && (
        <section>
          <h2>Education</h2>
          <p>School: {education.schoolName}</p>
          <p>Title: {education.titleOfStudy}</p>
          <p>Start Date: {education.startDate}</p>
          <p>End Date: {education.endDate}</p>
        </section>
      )}

      {Object.keys(expInfo).length > 0 && (
        <section>
          <h2>Practical Experience</h2>
          <p>Company Name: {expInfo.companyName}</p>
          <p>Position Title: {expInfo.positionTitle}</p>
          <p>Responsibilities: {expInfo.responsibilities}</p>
          <p>Start Date: {expInfo.startDate}</p>
          <p>End Date: {expInfo.endDate}</p>
        </section>
      )}
    </>
  );
}
export default App;
