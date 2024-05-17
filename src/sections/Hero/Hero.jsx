import styles from './HeroStyles.module.css';
import heroImg from '../../assets/hero-img.png';
import themeIcon from '../../assets/sun-black.svg';
import githubIcon from '../../assets/github-black.svg';
import linkedinIcon from '../../assets/linkedin-black.svg';
import CV from '../../assets/cv.pdf';

function Hero() {
  return (
    <section id ="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img className={styles.hero} src={heroImg} alt="Avatar profile picture" />
        <img className={styles.colorMode} src={themeIcon} alt="Color mode icon" />
      </div>
      <div className={styles.info}>
        <h1>
          Daniel
          <br />
          Shaw
        </h1>
        <h2>Full Stack Developer</h2>
        <span>
          <a href="https://github.com/DanielShaw98" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://www.linkedin.com/in/daniel-shaw-ds98/" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p>With a passion for both frontend and backend development.</p>
        <a href={CV} download='cv.pdf'>
          <button className="hover">CV</button>
        </a>
      </div>
    </section>
  );
}

export default Hero
