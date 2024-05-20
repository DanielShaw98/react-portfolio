import styles from './SkillsStyles.module.css';
import SkillList from '../../common/SkillList';
import htmlIcon from '../../assets/html-icon.svg';
import scssIcon from '../../assets/scss-icon.svg';
import javascriptIcon from '../../assets/javascript-icon.svg';
import reactIcon from '../../assets/react-icon.svg';
import rubyIcon from '../../assets/ruby-icon.svg';
import railsIcon from '../../assets/rails-icon.svg';
import nodejsIcon from '../../assets/nodejs-icon.svg';
import gitIcon from '../../assets/git-icon.svg';
import sqlIcon from '../../assets/sql-icon.svg';
import herokuIcon from '../../assets/heroku-icon.svg';
import figmaIcon from '../../assets/figma-icon.svg';
import githubIcon from '../../assets/github-icon.svg';
import bootstrapIcon from '../../assets/bootstrap-icon.svg';

function Skills() {
  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={htmlIcon} skill="HTML"/>
        <SkillList src={scssIcon} skill="SCSS"/>
        <SkillList src={javascriptIcon} skill="Javascript"/>
        <SkillList src={reactIcon} skill="React"/>
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={rubyIcon} skill="Ruby"/>
        <SkillList src={railsIcon} skill="Rails"/>
        <SkillList src={nodejsIcon} skill="Node.js"/>
        <SkillList src={gitIcon} skill="Git"/>
        <SkillList src={sqlIcon} skill="SQL"/>
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={herokuIcon} skill="Heroku"/>
        <SkillList src={figmaIcon} skill="Figma"/>
        <SkillList src={githubIcon} skill="Github"/>
        <SkillList src={bootstrapIcon} skill="Bootstrap"/>
      </div>
    </section>
  );
}

export default Skills
