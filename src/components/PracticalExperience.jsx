export default function PracticalExperience({ formData, setFormData }) {
  function onChange(event) {
    const { id, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  }

  return (
    <>
      <label htmlFor="companyName">Company Name</label>
      <input
        type="text"
        id="companyName"
        placeholder="Company Name"
        value={formData.companyName}
        onChange={onChange}
      />

      <label htmlFor="positionTitle">Position Title</label>
      <input
        type="text"
        id="positionTitle"
        placeholder="Position Title"
        value={formData.positionTitle}
        onChange={onChange}
      />

      <label htmlFor="responsibilities">Main Responsibilities</label>
      <input
        type="text"
        id="responsibilities"
        placeholder="Main Responsibilities"
        value={formData.responsibilities}
        onChange={onChange}
      />

      <label htmlFor="startDate">Start Date</label>
      <input
        type="date"
        id="startDate"
        value={formData.startDate}
        onChange={onChange}
      />

      <label htmlFor="endDate">End Date</label>
      <input
        type="date"
        id="endDate"
        value={formData.endDate}
        onChange={onChange}
      />
      <button type="button">Edit</button>
    </>
  );
}