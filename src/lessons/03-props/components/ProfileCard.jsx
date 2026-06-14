function ProfileCard({ name, role, location }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{role}</p>
      <p>{location}</p>
    </div>
  );
}

export default ProfileCard;
