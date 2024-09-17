import styles from './SkillsStyles.module.css';
import SkillList from '../../common/SkillList';
import htmlIcon from '../../assets/html-icon.svg';
import scssIcon from '../../assets/scss-icon.svg';
import rubyIcon from '../../assets/ruby-icon.svg';
import javascriptIcon from '../../assets/javascript-icon.svg';
import typescriptIcon from '../../assets/typescript-icon.svg';
import pythonIcon from '../../assets/python-icon.svg';
import sqlIcon from '../../assets/sql-icon.svg';
import railsIcon from '../../assets/rails-icon.svg';
import stimulusjsIcon from '../../assets/stimulus.js-icon.svg';
import reactIcon from '../../assets/react-icon.svg';
import nodejsIcon from '../../assets/nodejs-icon.svg';
import nextjsIcon from '../../assets/next.js-icon.svg';
import tailwindcssIcon from '../../assets/tailwindcss-icon.svg';
import githubIcon from '../../assets/github-icon.svg';
import gitIcon from '../../assets/git-icon.svg';
import herokuIcon from '../../assets/heroku-icon.svg';
import vercelIcon from '../../assets/vercel-icon.svg';
import postmanIcon from '../../assets/postman-icon.svg';
import openaiIcon from '../../assets/openai-icon.svg';
import postgresqlIcon from '../../assets/postgresql-icon.svg';
import figmaIcon from '../../assets/figma-icon.svg';
import viteIcon from '../../assets/vite-icon.svg';
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
        margin: "0px 200px",
      }}>
        <h4 className="skillTitle">Languages</h4>
        <div className={styles.skillList}>
          <MouseParallaxChild factorX={0.04} factorY={0.04}>
            <SkillList src={htmlIcon} skill="HTML"/>
          </MouseParallaxChild>
          <MouseParallaxChild factorX={0.06} factorY={0.06}>
            <SkillList src={scssIcon} skill="SCSS"/>
          </MouseParallaxChild>
          <MouseParallaxChild factorX={0.08} factorY={0.08}>
            <SkillList src={rubyIcon} skill="Ruby"/>
          </MouseParallaxChild>
          <MouseParallaxChild factorX={0.1} factorY={0.1}>
            <SkillList src={javascriptIcon} skill="Javascript"/>
          </MouseParallaxChild>
          <MouseParallaxChild factorX={0.08} factorY={0.08}>
            <SkillList src={typescriptIcon} skill="Typescript"/>
          </MouseParallaxChild>
          <MouseParallaxChild factorX={0.06} factorY={0.06}>
            <SkillList src={pythonIcon} skill="Python"/>
          </MouseParallaxChild>
          <MouseParallaxChild factorX={0.04} factorY={0.04}>
            <SkillList src={sqlIcon} skill="SQL"/>
          </MouseParallaxChild>
        </div>
        <h4 className="skillTitle">Frameworks/Libraries</h4>
        <div className={styles.skillList}>
          <MouseParallaxChild factorX={0.06} factorY={0.06}>
            <SkillList src={railsIcon} skill="Rails"/>
          </MouseParallaxChild>
          <MouseParallaxChild factorX={0.08} factorY={0.08}>
            <SkillList src={stimulusjsIcon} skill="Stimulus.js"/>
          </MouseParallaxChild>
          <MouseParallaxChild factorX={0.1} factorY={0.1}>
            <SkillList src={reactIcon} skill="React"/>
          </MouseParallaxChild>
          <MouseParallaxChild factorX={0.12} factorY={0.12}>
            <SkillList src={nodejsIcon} skill="Node.js"/>
          </MouseParallaxChild>
          <MouseParallaxChild factorX={0.08} factorY={0.08}>
            <SkillList src={nextjsIcon} skill="Next.js"/>
          </MouseParallaxChild>
          <MouseParallaxChild factorX={0.06} factorY={0.06}>
            <SkillList src={tailwindcssIcon} skill="Tailwind CSS"/>
          </MouseParallaxChild>
        </div>
        <h4 className="skillTitle">Tools</h4>
        <div className={styles.skillList}>
          <MouseParallaxChild factorX={0.04} factorY={0.04}>
            <SkillList src={githubIcon} skill="Github"/>
          </MouseParallaxChild>
          <MouseParallaxChild factorX={0.04} factorY={0.04}>
            <SkillList src={gitIcon} skill="Git"/>
          </MouseParallaxChild>
          <MouseParallaxChild factorX={0.06} factorY={0.06}>
            <SkillList src={herokuIcon} skill="Heroku"/>
          </MouseParallaxChild>
          <MouseParallaxChild factorX={0.08} factorY={0.08}>
            <SkillList src={vercelIcon} skill="Vercel"/>
          </MouseParallaxChild>
          <MouseParallaxChild factorX={0.1} factorY={0.1}>
            <SkillList src={postmanIcon} skill="Postman"/>
          </MouseParallaxChild>
          <MouseParallaxChild factorX={0.1} factorY={0.1}>
            <SkillList src={openaiIcon} skill="Open AI"/>
          </MouseParallaxChild>
          <MouseParallaxChild factorX={0.08} factorY={0.08}>
            <SkillList src={postgresqlIcon} skill="PostgreSQL"/>
          </MouseParallaxChild>
          <MouseParallaxChild factorX={0.06} factorY={0.06}>
            <SkillList src={figmaIcon} skill="Figma"/>
          </MouseParallaxChild>
          <MouseParallaxChild factorX={0.04} factorY={0.04}>
            <SkillList src={viteIcon} skill="Vite"/>
          </MouseParallaxChild>
          <MouseParallaxChild factorX={0.04} factorY={0.04}>
            <SkillList src={bootstrapIcon} skill="Bootstrap"/>
          </MouseParallaxChild>
        </div>
      </MouseParallaxContainer>
    </section>
  );
}

export default Skills
