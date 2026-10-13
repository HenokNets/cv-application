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

  const [generalFormData, setgeneralFormData] = useState({
    name: "",
    email: "", 
    phone: "",
  });

  return (
    <>
      <EducationalExperience
        formData={eduFormData}
        setFormData={setEduFormData}
      />
      <GeneralInformation formData={generalFormData} setFormData={setgeneralFormData} />
      <PracticalExperience />
    </>
  );
}
export default App;
