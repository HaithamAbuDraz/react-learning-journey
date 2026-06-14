import ProfileCard from '../../challenges/03-props/ProfileCard';
import SkillsCard from '../../challenges/03-props/SkillsCard';
import Card from '../../challenges/03-props/Card';

function PropsLesson() {
  return (
    <div>
      <h1>Props Lesson</h1>

      <h2>Profile Cards</h2>
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

      <h2>Card with Children Prop</h2>
      <Card>
        <h2>Hello React</h2>
        <p>This content comes from children.</p>
        <p>The Card component wraps everything inside it!</p>
      </Card>

      <Card>
        <h3>Another Card Example</h3>
        <p>You can put ANY content inside a Card component</p>
        <button>Click Me</button>
      </Card>
    </div>
  );
}

export default PropsLesson;
