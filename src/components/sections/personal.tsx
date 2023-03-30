import { Button } from "~/components/base/buttons";
import styles from "~/styles/modules/personal.module.css";
export function Personal() {
  return (
    <div id="personal" className={styles.container}>
      <div className={styles.sec1}>
        <h2>
          Soheil Ghanbary
          <br />
          <span>Full-Stack Web Developer</span>
        </h2>
        <p>
          Product Manager / Full-Stack Web Developer with five years of
          extensive experience in web development, UI design, and product
          management specializing in building exceptional digital experiences
          for your business needs. And proven understanding of building scalable
          products using scrum / agile methodologies.
        </p>
        <div className={styles.buttons}>
          <Button color="primary" text="Resume" />
          <Button color="default" text="Contact Me" />
        </div>
      </div>
      <div className={styles.sec2}>
        <div className={styles.image}>
          <img draggable="false" src="/images/tony.png" className="sepia" loading="lazy" />
        </div>
      </div>
    </div>
  );
}
