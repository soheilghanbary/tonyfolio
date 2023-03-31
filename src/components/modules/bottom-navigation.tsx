import UserIcon from "~/assets/icons/user.svg";
import UserSquareIcon from "~/assets/icons/user-square.svg";
import ImagesIcon from "~/assets/icons/images.svg";
import PhoneIcon from "~/assets/icons/phone.svg";
import BoltIcon from "~/assets/icons/bolt-alt.svg";
import styles from "~/styles/modules/bottom-navigation.module.css";

interface BottomNavigationItemProps {
  label: string;
  href: string;
  icon: JSX.Element | any;
}

export default function BottomNavigation({ navItems }: any) {
  return (
    <ul className={styles.container}>
      <BottomNavigationItem icon={UserIcon} href="#" label={navItems.l1} />
      <BottomNavigationItem
        icon={BoltIcon}
        href="#skills"
        label={navItems.l2}
      />
      <BottomNavigationItem
        icon={ImagesIcon}
        href="#portfolio"
        label={navItems.l3}
      />
      <BottomNavigationItem
        icon={UserSquareIcon}
        href="#about"
        label={navItems.l4}
      />
      <BottomNavigationItem
        icon={PhoneIcon}
        href="#contact"
        label={navItems.l5}
      />
    </ul>
  );
}

function BottomNavigationItem({
  label,
  href,
  icon,
}: BottomNavigationItemProps) {
  const Icon = icon;
  return (
    <li>
      <a href={href}>
        <Icon />
        <span>{label}</span>
      </a>
    </li>
  );
}
