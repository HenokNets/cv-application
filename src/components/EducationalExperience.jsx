export default function EducationalExperience() {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="schoolName">School Name</label>
      <input
        type="text"
        id="schoolName"
        placeholder="e.g., Cambridge"
        onChange={handleChange}
      />

      <label htmlFor="titleOfStudy">Title of Study</label>
      <input
        type="text"
        id="titleOfStudy"
        placeholder="e.g., Astrophysics"
        onChange={handleChange}
      />

      <label htmlFor="startDate">Start Date</label>
      <input type="date" id="startDate" onChange={handleChange} />

      <label htmlFor="endDate">End Date</label>
      <input type="date" id="endDate" onChange={handleChange} />

      <button type="submit">Submit</button>
      <button type="button">Edit</button>
    </form>
  );
}
