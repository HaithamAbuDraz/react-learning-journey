function ProfileCard(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>{props.role}</p>
      <p>{props.location}</p>
    </div>
  );
}

export default ProfileCard;
