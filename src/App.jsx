import { useState } from "react";
import EducationalExperience from "./components/EducationalExperience";
import GeneralInformation from "./components/GeneralInformation";
import PracticalExperience from "./components/PracticalExperience";
import './App.css'

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
    <main className="app-container">
      <header className="page-header">
        <h1>CV Builder</h1>
        <p>Build your professional profile</p>
      </header>
      {isEditing && (
        <form className="cv-form" onSubmit={handleSubmit}>
          <section className="form-card">
            <h2>General Information</h2>
            <GeneralInformation
              formData={generalFormData}
              setFormData={setGeneralFormData}
            />
          </section>

          <section className="form-card">
            <h2>Educational Experience</h2>
            <EducationalExperience
              formData={eduFormData}
              setFormData={setEduFormData}
            />
          </section>

          <section className="form-card">
            <h2>Practical Experience</h2>
            <PracticalExperience
              formData={practicalFormData}
              setFormData={setPracticalFormData}
            />
          </section>

          <button className="primary-button " type="submit">
            Submit CV
          </button>
        </form>
      )}

      {isSubmitted && !isEditing && (
        <section className="cv-preview">
          <h1>My CV</h1>
          <section className="preview-section">
            <h2>General Information</h2>
            <p>Name: {generalFormData.name}</p>
            <p>Email: {generalFormData.email}</p>
            <p>Phone: {generalFormData.phone}</p>
          </section>

          <section className="preview-section">
            <h2>Educational Experience</h2>
            <p>School Name: {eduFormData.schoolName}</p>
            <p>Title of Study: {eduFormData.titleOfStudy}</p>
            <p>Start Date: {eduFormData.startDate}</p>
            <p>End Date: {eduFormData.endDate}</p>
          </section>

          <section className="preview-section">
            <h2>Practical Experience</h2>
            <p>Company: {practicalFormData.companyName}</p>
            <p>Position: {practicalFormData.positionTitle}</p>
            <p>Responsibilities: {practicalFormData.responsibilities}</p>
            <p>Start Date: {practicalFormData.startDate}</p>
            <p>End Date: {practicalFormData.endDate}</p>
          </section>

          <button className="primary-button" type="button" onClick={handleEdit}>
            Edit CV
          </button>
        </section>
      )}
    </main>
  );
}

export default App;
