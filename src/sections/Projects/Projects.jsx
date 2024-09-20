import styles from './ProjectsStyles.module.css';
import phi from '../../assets/phi-3.5-law-logo.png';
import insite from '../../assets/insite-logo.png';
import vloyal from '../../assets/vloyal-logo.png';
import supperclub from '../../assets/supperclub-logo.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id ="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard src={phi} link="https://github.com/DanielShaw98/data-prep" h3="Phi-3.5-Law" p="Trained Phi-3.5 model, with ability to retrieve specific clauses from contracts"
        contributions={`‣ Developed a Python programme utilising OpenAI API to create a dataset of over 10,000 examples.
          ‣ Used Google Colab to run the training of the Phi-3.5-Mini-Instruct model.
          ‣ This is a work in progress. Currently evaluating the trained model and creating more datasets to improve the accuracy and reliability.`} />
        <ProjectCard link="https://github.com/DanielShaw98/dev-up" h3="DevUp" p="Connecting developers and founders to collaborate on projects" hasAnimation={true}
        contributions={`‣ My own project I'm building to learn Next.js, React, Typescript and Tailwind CSS.
        ‣ Opted for the app router, built and deployed in a production environment.
        ‣ Deployed with Vercel to utilise their SQL Serverless Database.
        ‣ Used NextAuth.js (Google Auth, Github Auth) for authentication.`} />
        <ProjectCard src={insite} link="https://github.com/DanielShaw98/insite" h3="Insite" p="E-learning/content marketplace"
        contributions={`‣ Worked on the full life cycle of this MVP platform, from idea conceptualisation, figma design, database schema, to implementation using Ruby on Rails, Stimulus.js, HTML, SCSS and PostgreSQL.
        ‣ Utilising the Devise gem for authentication, pg_search gem for searching and Pagy gem for pagination.`} />
        <ProjectCard src={vloyal} link="https://github.com/DanielShaw98/VLoyal" h3="Vloyal" p="Virtual loyalty card wallet"
        contributions={`‣ Developed during my time at Le Wagon's Web Development Bootcamp, in a team of 5.
        ‣ Acted as the project lead and project manager. Managed all merges and resolved all conflicts in GitHub.
        ‣ Implemented the QR code scanning feature.
        ‣ Utilised Devise gem, Geocoder gem, Mapbox API and Cloudinary in this Ruby on Rails project.`} />
        <ProjectCard src={supperclub} link="https://github.com/DanielShaw98/SupperClub" h3="SupperClub" p="Airbnb clone for supperclub events"
        contributions={`‣ Developed during my time at Le Wagon's Web Development Bootcamp,  in a team of 5.
        ‣ Acted as the project lead and project manager. Managed all merges and resolved all conflicts in GitHub.
        ‣ Utilised Devise gem, Geocoder gem, pg_search gem, Simple Form gem, Mapbox API and Cloudinary in this Ruby on Rails project.`} />
      </div>
    </section>
  )
}

export default Projects
