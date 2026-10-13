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

  return (
    <>
      <EducationalExperience
        formData={eduFormData}
        setFormData={setEduFormData}
      />
      <GeneralInformation />
      <PracticalExperience />
    </>
  );
}
export default App;
