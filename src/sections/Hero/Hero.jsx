import styles from './HeroStyles.module.css';
import heroImg from '../../assets/hero-img.png';
import sun from '../../assets/sun-black.svg';
import moon from '../../assets/moon-white.svg';
import githubBlack from '../../assets/github-black.svg';
import githubWhite from '../../assets/github-white.svg';
import linkedinBlack from '../../assets/linkedin-black.svg';
import linkedinWhite from '../../assets/linkedin-white.svg';
import CV from '../../assets/cv.pdf';
import useTheme from '../../common/useTheme';

function Hero() {
  const { theme, toggleTheme } = useTheme();
  const themeIcon = theme === 'light' ? sun : moon;
  const githubIcon = theme === 'light' ? githubBlack : githubWhite;
  const linkedinIcon = theme === 'light' ? linkedinBlack : linkedinWhite;

  return (
    <section id ="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img className={styles.hero} src={heroImg} alt="Avatar profile picture" />
        <img className={styles.colorMode} src={themeIcon} alt="Color mode icon" onClick={toggleTheme} />
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
        <p className={styles.description}>With a passion for both frontend and backend development.</p>
        <a href={CV} download>
          <button className="hover">CV</button>
        </a>
      </div>
    </section>
  );
}

export default Hero
