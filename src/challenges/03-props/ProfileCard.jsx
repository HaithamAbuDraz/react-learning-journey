function ProfileCard({ name, role, location, experience }) {
  return (
    <>
      <h2>Name: {name}</h2>
      <p>Role: {role}</p>
      <p>Location: {location}</p>
      <p>Experience: {experience} years</p>
    </>
  );
}

export default ProfileCard;
