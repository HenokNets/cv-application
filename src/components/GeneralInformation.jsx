export default function GeneralInformation({ formData, setFormData }) {
  function onChange(event) {
    const { id, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  }

  return (
    <>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        placeholder="Your Name"
        onChange={onChange}
        value={formData.name}
      />

      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        placeholder="yourusername@gmail.com"
        onChange={onChange}
        value={formData.email}
      />

      <label htmlFor="phone">Phone Number</label>
      <input
        type="tel"
        id="phone"
        placeholder="Phone Number"
        onChange={onChange}
        value={formData.phone}
      />
    </>
  );
}
