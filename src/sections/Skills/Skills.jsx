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
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";

function Skills() {
  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <MouseParallaxContainer
      resetOnLeave
      containerStyle={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        overflow: "visible",
      }}>
        <div className={styles.skillList}>
          <MouseParallaxChild factorX={0.06} factorY={0.06}>
            <SkillList src={htmlIcon} skill="HTML"/>
          </MouseParallaxChild>
          <MouseParallaxChild factorX={0.08} factorY={0.08}>
            <SkillList src={scssIcon} skill="SCSS"/>
          </MouseParallaxChild>
          <MouseParallaxChild factorX={0.1} factorY={0.1}>
            <SkillList src={javascriptIcon} skill="Javascript"/>
          </MouseParallaxChild>
          <MouseParallaxChild factorX={0.08} factorY={0.08}>
            <SkillList src={reactIcon} skill="React"/>
          </MouseParallaxChild>
        </div>
        <hr />
        <div className={styles.skillList}>
          <MouseParallaxChild factorX={0.06} factorY={0.06}>
            <SkillList src={rubyIcon} skill="Ruby"/>
          </MouseParallaxChild>
          <MouseParallaxChild factorX={0.08} factorY={0.08}>
            <SkillList src={railsIcon} skill="Rails"/>
          </MouseParallaxChild>
          <MouseParallaxChild factorX={0.1} factorY={0.1}>
            <SkillList src={nodejsIcon} skill="Node.js"/>
          </MouseParallaxChild>
          <MouseParallaxChild factorX={0.08} factorY={0.08}>
            <SkillList src={gitIcon} skill="Git"/>
          </MouseParallaxChild>
          <MouseParallaxChild factorX={0.06} factorY={0.06}>
            <SkillList src={sqlIcon} skill="SQL"/>
          </MouseParallaxChild>
        </div>
        <hr />
        <div className={styles.skillList}>
          <MouseParallaxChild factorX={0.06} factorY={0.06}>
            <SkillList src={herokuIcon} skill="Heroku"/>
          </MouseParallaxChild>
          <MouseParallaxChild factorX={0.08} factorY={0.08}>
            <SkillList src={figmaIcon} skill="Figma"/>
          </MouseParallaxChild>
          <MouseParallaxChild factorX={0.1} factorY={0.1}>
            <SkillList src={githubIcon} skill="Github"/>
          </MouseParallaxChild>
          <MouseParallaxChild factorX={0.08} factorY={0.08}>
            <SkillList src={bootstrapIcon} skill="Bootstrap"/>
          </MouseParallaxChild>
        </div>
      </MouseParallaxContainer>
    </section>
  );
}

export default Skills
