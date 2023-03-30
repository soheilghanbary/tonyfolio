import styles from "~/styles/modules/about.module.css";
import { user } from "~/utils/common.json";

export default function About() {
  return (
    <div id="about" className={styles.container}>
      <div className={styles.personal}>
        <h2>Personal Info</h2>
        <ul className={styles.items}>
          <PersonalInfoItem label="Education" value={user.education} />
          <PersonalInfoItem label="Birthday" value={user.birthday} />
          <PersonalInfoItem
            label="Military Service"
            value={user.military_service}
          />
          <PersonalInfoItem label="Location" value={user.location} />
          <PersonalInfoItem label="Email" value={user.email} />
          <PersonalInfoItem label="Mobile" value={user.mobile} />
        </ul>
      </div>
      <div className={styles.sec2}>
        <img className="w-[440px] ml-auto" src="/images/kent-red-2.webp" />
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
