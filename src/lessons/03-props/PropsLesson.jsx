import ProfileCard from '../../challenges/03-props/ProfileCard';
import SkillsCard from '../../challenges/03-props/SkillsCard';

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

      <h2>Skills Cards</h2>
      <SkillsCard skill='HTML' level='Advanced' />
      <SkillsCard skill='CSS' level='Advanced' />
      <SkillsCard skill='JavaScript' level='Intermediate' />
      <SkillsCard skill='React' level='Beginner' />
    </div>
  );
}

export default PropsLesson;
