export default function GeneralInformation() {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" placeholder="Your Name" />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="yourusername@gmail.com" />

        <label htmlFor="phone">Phone Number</label>
        <input type="tel" id="phone" placeholder="Phone Number" />

        <button type="submit">Submit</button>
        <button type="button">Edit</button>
      </form>
    </>
  );
}
