export default function PracticalExperience() {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="companyName">Company Name</label>
        <input type="text" id="companyName" placeholder="Company Name" />

        <label htmlFor="positionTitle">Position Title</label>
        <input type="text" id="positionTitle" placeholder="Position Title" />

        <label htmlFor="responsibilities">Main Responsibilities</label>
        <input
          type="text"
          id="responsibilities"
          placeholder="Main Responsibilities"
        />

        <label htmlFor="startDate">Start Date</label>
        <input type="date" id="startDate" />

        <label htmlFor="endDate">End Date</label>
        <input type="date" id="endDate" />

        <button type="submit">Submit</button>
        <button type="button">Edit</button>
      </form>
    </>
  );
}
