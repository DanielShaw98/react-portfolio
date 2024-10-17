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
import nextjsIconDark from '../../assets/next.js-icon-dark.svg';
import nextjsIconLight from '../../assets/next.js-icon-light.svg';
import tailwindcssIcon from '../../assets/tailwindcss-icon.svg';
import githubIcon from '../../assets/github-icon.svg';
import gitIcon from '../../assets/git-icon.svg';
import herokuIcon from '../../assets/heroku-icon.svg';
import vercelIconDark from '../../assets/vercel-icon-dark.svg';
import vercelIconLight from '../../assets/vercel-icon-light.svg';
import postmanIcon from '../../assets/postman-icon.svg';
import openaiIconDark from '../../assets/openai-icon-dark.svg';
import openaiIconLight from '../../assets/openai-icon-light.svg';
import postgresqlIcon from '../../assets/postgresql-icon.svg';
import figmaIcon from '../../assets/figma-icon.svg';
import viteIcon from '../../assets/vite-icon.svg';
import bootstrapIcon from '../../assets/bootstrap-icon.svg';
import useTheme from '../../common/useTheme';
import 'animate.css';

function Skills() {
  const { theme } = useTheme();
  const nextjsIcon = theme === 'light' ? nextjsIconDark : nextjsIconLight;
  const vercelIcon = theme === 'light' ? vercelIconDark : vercelIconLight;
  const openaiIcon = theme === 'light' ? openaiIconDark : openaiIconLight;

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
        <h4 className="skillTitle">Languages</h4>
        <div className={styles.skillList}>
          <SkillList src={htmlIcon} skill="HTML"/>
          <SkillList src={scssIcon} skill="SCSS"/>
          <SkillList src={rubyIcon} skill="Ruby"/>
          <SkillList src={javascriptIcon} skill="Javascript"/>
          <SkillList src={typescriptIcon} skill="Typescript"/>
          <SkillList src={pythonIcon} skill="Python"/>
          <SkillList src={sqlIcon} skill="SQL"/>
        </div>
        <h4 className="skillTitle">Frameworks/Libraries</h4>
        <div className={styles.skillList}>
          <SkillList src={railsIcon} skill="Rails"/>
          <SkillList src={stimulusjsIcon} skill="Stimulus.js"/>
          <SkillList src={reactIcon} skill="React"/>
          <SkillList src={nodejsIcon} skill="Node.js"/>
          <SkillList src={nextjsIcon} skill="Next.js"/>
          <SkillList src={tailwindcssIcon} skill="Tailwind CSS"/>
        </div>
        <h4 className="skillTitle">Tools</h4>
        <div className={styles.skillList}>
          <SkillList src={githubIcon} skill="Github"/>
          <SkillList src={gitIcon} skill="Git"/>
          <SkillList src={herokuIcon} skill="Heroku"/>
          <SkillList src={vercelIcon} skill="Vercel"/>
          <SkillList src={postmanIcon} skill="Postman"/>
          <SkillList src={openaiIcon} skill="Open AI"/>
          <SkillList src={postgresqlIcon} skill="PostgreSQL"/>
          <SkillList src={figmaIcon} skill="Figma"/>
          <SkillList src={viteIcon} skill="Vite"/>
          <SkillList src={bootstrapIcon} skill="Bootstrap"/>
        </div>
    </section>
  );
}

export default Skills
