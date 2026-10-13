export default function EducationalExperience({ formData, setFormData }) {
  function handleChange(event) {
    const { id, value } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  }

  return (
    <>
      <label htmlFor="schoolName">School Name</label>
      <input
        type="text"
        id="schoolName"
        value={formData.schoolName}
        placeholder="e.g., Cambridge"
        onChange={handleChange}
      />

      <label htmlFor="titleOfStudy">Title of Study</label>
      <input
        type="text"
        id="titleOfStudy"
        value={formData.titleOfStudy}
        placeholder="e.g., Astrophysics"
        onChange={handleChange}
      />

      <label htmlFor="startDate">Start Date</label>
      <input type="date" id="startDate" value={formData.startDate} onChange={handleChange} />

      <label htmlFor="endDate">End Date</label>
      <input type="date" id="endDate" value={formData.endDate} onChange={handleChange} />
    </>
  );
}
