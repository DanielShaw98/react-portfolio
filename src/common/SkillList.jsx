import styles from './styling/SkillList.module.css';

function SkillList({src, skill}) {
  return (
    <span className={styles.hvrFloatShadow}>
      <img src={src} alt={`${skill} icon`} />
      <p>{skill}</p>
    </span>
  )
}

export default SkillList
