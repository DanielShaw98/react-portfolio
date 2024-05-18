import styles from './ProjectsStyles.module.css';
import insite from '../../assets/insite-logo.png';
import vloyal from '../../assets/vloyal-logo.png';
import supperclub from '../../assets/supperclub-logo.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id ="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard src={insite} link="https://github.com/DanielShaw98/insite" h3="Insite" p="E-learning/content marketplace" />
        <ProjectCard src={vloyal} link="https://github.com/DanielShaw98/VLoyal" h3="Vloyal" p="Virtual loyalty card wallet" />
        <ProjectCard src={supperclub} link="https://github.com/DanielShaw98/SupperClub" h3="SupperClub" p="Airbnb clone for supperclub events" />
      </div>
    </section>
  )
}

export default Projects
