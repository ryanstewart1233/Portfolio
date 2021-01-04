import "../styles/Skills.scss";
import Button from "./Button";
import SkillBar from "./SkillBar";

const Skills = () => {
  return (
    <section className="skills">
      <div className="skills__title">Skills</div>
      <div className="skills__text">
        Despite only coding for a little under a year I have learnt a huge
        amount in a short time thanks to lockdown. Programming really has become
        a great hobby and passion and I cannot wait to learn more in a
        professional position
      </div>
      <div className="skills__bar-container">
        <SkillBar name="HTML" percent="80" />
        <SkillBar name="CSS" percent="80" />
        <SkillBar name="Javascript" percent="70" />
        <SkillBar name="Python" percent="60" />
        <SkillBar name="NodeJS" percent="55" />
        <SkillBar name="React" percent="50" />
        <SkillBar name="MongoDB" percent="50" />
        <SkillBar name="SQL" percent="40" />
      </div>

      <Button color="red" to="/resume">
        See Resume
      </Button>
    </section>
  );
};

export default Skills;
