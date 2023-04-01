import styles from "./personal.module.css";
import PersonalImage from "../Personal/PersonalImage";
import PersonalInfo from "../Personal/PersonalInfo";

interface PersonalProps {
  title: string;
  subtitle: string;
  description: string;
  btnText: string;
}

export default function Personal(props: PersonalProps) {
  return (
    <div id="personal" className={styles.container}>
      <div className={styles.sec1}>
        <PersonalInfo {...props} />
      </div>
      <div className={styles.sec2}>
        <PersonalImage />
      </div>
    </div>
  );
}
