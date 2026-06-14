import ProfileCard from './components/ProfileCard';

function PropsLesson() {
  return (
    <div>
      <h1>Props Lesson</h1>
      <ProfileCard
        name='Haitham Abu Draz'
        role='Software Engineer'
        location='Palestine'
      />
      <ProfileCard
        name='Ahmed Khaled'
        role='Frontend Developer'
        location='Jordan'
      />
      <ProfileCard
        name='Anas Batra'
        role='Backend Developer'
        location='Egypt'
      />
    </div>
  );
}

export default PropsLesson;
