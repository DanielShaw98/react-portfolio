import styles from './HeroStyles.module.css';
import { ReactTyped } from "react-typed";
import heroImg from '../../assets/hero-img.png';
import sun from '../../assets/sun-black.svg';
import moon from '../../assets/moon-white.svg';
import githubBlack from '../../assets/github-black.svg';
import githubWhite from '../../assets/github-white.svg';
import linkedinBlack from '../../assets/linkedin-black.svg';
import linkedinWhite from '../../assets/linkedin-white.svg';
import world from '../../assets/world-icon.svg';
import CV from '../../assets/Daniel Shaw - Full Stack CV 2024.pdf';
import useTheme from '../../common/useTheme';
import TopNav from '../../common/TopNav';

function Hero() {
  const { theme, toggleTheme } = useTheme();
  const themeIcon = theme === 'light' ? sun : moon;
  const githubIcon = theme === 'light' ? githubBlack : githubWhite;
  const linkedinIcon = theme === 'light' ? linkedinBlack : linkedinWhite;

  return (
    <section id ="hero" className={styles.container}>
      <TopNav />
      <div className={styles.colorModeContainer}>
        <img className={styles.hero} src={heroImg} alt="Avatar profile picture" />
        <div className={styles.colorModeWrapper}>
          <img className={styles.colorMode} src={themeIcon} alt="Color mode icon" onClick={toggleTheme} />
          <p className={`${styles.colorModeMessage} ${styles.hide}`}>Try out light and dark mode</p>
        </div>
        <div className={styles.gameWrapper}>
          <a href="https://higherorlower.world/" target="_blank">
            <img className={styles.worldIcon} src={world} alt="World game icon" />
          </a>
          <p className={`${styles.gameWrapperMessage} ${styles.hide}`}>Check out my higher or lower game</p>
        </div>
      </div>
      <div className={styles.info}>
        <h1>
          Daniel
          <br className={styles.hide} />
          <span className={styles.addSpace}>Shaw</span>
        </h1>
        <h2>{" "}
          <ReactTyped
            strings={["Full Stack Developer", "Software Engineer", "Web Developer"]}
            typeSpeed={80}
            backSpeed={50}
            loop
            backDelay={1500}
            startDelay={500}
            cursorChar=">"
            showCursor={true}
          />
        </h2>
        <div>
          <a className={styles.socials} href="https://github.com/DanielShaw98" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a className={styles.socials} href="https://www.linkedin.com/in/daniel-shaw-ds98/" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </div>
        <p className={styles.description}>With a passion for both frontend and backend development.</p>
        <a className={styles.download} href={CV} download>
          <button className="hover">Download CV</button>
        </a>
      </div>
    </section>
  );
}

export default Hero
