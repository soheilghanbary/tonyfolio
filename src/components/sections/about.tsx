import styles from "~/styles/modules/about.module.css";
import { user } from "~/utils/common.json";
import KentImage from '~/assets/images/kent-red-2.webp'

interface AboutProps {
  title: string;
  edu: string;
  birth: string;
  email: string;
  military_service: string;
  location: string;
  mobile: string;
}

export default function About({ title , edu , email , military_service , birth , location , mobile }: AboutProps) {
  return (
    <div id="about" className={styles.container}>
      <div className={styles.personal}>
        <h2>{title}</h2>
        <ul className={styles.items}>
          <PersonalInfoItem label={edu} value={user.education} />
          <PersonalInfoItem label={email} value={user.birthday} />
          <PersonalInfoItem
            label={military_service}
            value={user.military_service}
          />
          <PersonalInfoItem label={location} value={user.location} />
          <PersonalInfoItem label={email} value={user.email} />
          <PersonalInfoItem label={email} value={user.mobile} />
        </ul>
      </div>
      <div className={styles.sec2}>
        <img className="w-[440px] ml-auto" src={KentImage.src} />
      </div>
    </div>
  );
}

interface PersonalInfoItemProps {
  label: string;
  value: string;
}

const PersonalInfoItem: React.FC<PersonalInfoItemProps> = ({
  label,
  value,
}) => {
  return (
    <li>
      <span>{label} :</span>
      <span>{value}</span>
    </li>
  );
};
