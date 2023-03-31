import { Button } from "~/components/base/buttons";
import styles from "~/styles/modules/personal.module.css";
import TonyImage from '~/assets/images/tony.png'

interface PersonalProps {
  title: string;
  subtitle: string;
  description: string;
  btnText: string;
}

export function Personal({ title, subtitle, description, btnText }: PersonalProps) {
  return (
    <div id="personal" className={styles.container}>
      <div className={styles.sec1}>
        <h2>
          {title}
          <br />
          <span>{subtitle}</span>
        </h2>
        <p>{description}</p>
        <div className={styles.buttons}>
          <Button color="success" text={btnText} />
        </div>
      </div>
      <div className={styles.sec2}>
        <div className={styles.image}>
          <img
            draggable="false"
            src={TonyImage.src}
            className="grayscale"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
