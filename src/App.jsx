import { useState } from "react";
import EducationalExperience from "./components/EducationalExperience";
import GeneralInformation from "./components/GeneralInformation";
import PracticalExperience from "./components/PracticalExperience";

function App() {
  const [eduFormData, setEduFormData] = useState({
    schoolName: "",
    titleOfStudy: "",
    startDate: "",
    endDate: "",
  });

  const [generalFormData, setGeneralFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [practicalFormData, setPracticalFormData] = useState({
    companyName: "",
    positionTitle: "",
    responsibilities: "",
    startDate: "",
    endDate: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isEditing, setIsEditing] = useState(true);

  function handleSubmit(event) {
    event.preventDefault();
    setIsSubmitted(true);
    setIsEditing(false);
  }

  function handleEdit() {
    setIsEditing(true);
  }

  return (
    <>
      {isEditing && (
        <form onSubmit={handleSubmit}>
          <GeneralInformation
            formData={generalFormData}
            setFormData={setGeneralFormData}
          />

          <EducationalExperience
            formData={eduFormData}
            setFormData={setEduFormData}
          />

          <PracticalExperience
            formData={practicalFormData}
            setFormData={setPracticalFormData}
          />

          <button type="submit">Submit CV</button>
        </form>
      )}

      {isSubmitted && !isEditing && (
        <section>
          <h1>My CV</h1>

          <h2>General Information</h2>
          <p>Name: {generalFormData.name}</p>
          <p>Email: {generalFormData.email}</p>
          <p>Phone: {generalFormData.phone}</p>

          <h2>Educational Experience</h2>
          <p>School Name: {eduFormData.schoolName}</p>
          <p>Title of Study: {eduFormData.titleOfStudy}</p>
          <p>Start Date: {eduFormData.startDate}</p>
          <p>End Date: {eduFormData.endDate}</p>

          <h2>Practical Experience</h2>
          <p>Company: {practicalFormData.companyName}</p>
          <p>Position: {practicalFormData.positionTitle}</p>
          <p>Responsibilities: {practicalFormData.responsibilities}</p>
          <p>Start Date: {practicalFormData.startDate}</p>
          <p>End Date: {practicalFormData.endDate}</p>

          <button type="button" onClick={handleEdit}>
            Edit CV
          </button>
        </section>
      )}
    </>
  );
}

export default App;