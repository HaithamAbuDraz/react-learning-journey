import ProfileCard from '../../challenges/03-props/ProfileCard';

function PropsLesson() {
  return (
    <div>
      <h1>Props Lesson</h1>
      <ProfileCard
        name='Haitham Abu Draz'
        role='Software Engineer'
        location='Palestine'
        experience={2}
      />
      <ProfileCard
        name='Ahmed Khaled'
        role='Frontend Developer'
        location='Jordan'
        experience={2}
      />
      <ProfileCard
        name='Anas Batra'
        role='Backend Developer'
        location='Egypt'
        experience={1}
      />
    </div>
  );
}

export default PropsLesson;
