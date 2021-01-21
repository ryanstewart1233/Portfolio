import "../styles/Skills.scss";
import Button from "./Button";
import SkillBar from "./SkillBar";

const Skills = () => {
  return (
    <section className="skills">
      <div className="skills__title">Skills</div>
      <div className="skills__text">
        Over the last year I have taught myself how to code. After starting with
        a Python course online, I realised that is something that I have a great
        passion for. I continued to do further coursed in full-stack web
        development and in React. Since that time I have started creating all my
        own projects from scratch.
        <br />
        <br />
        Although my previous experience has been in biochemistry which I have
        obtained a first class degree for, many of the skills in which I have
        learnt such as problem-solving and critical thinking are transferable. I
        am now looking for my first professional role.
      </div>
      <div className="skills__bar-container">
        <SkillBar name="HTML" percent="80" />
        <SkillBar name="CSS" percent="80" />
        <SkillBar name="Javascript" percent="70" />
        <SkillBar name="Python" percent="60" />
        <SkillBar name="React" percent="60" />
        <SkillBar name="NodeJS" percent="55" />
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
