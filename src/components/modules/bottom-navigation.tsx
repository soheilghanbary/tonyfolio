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

const items: BottomNavigationItemProps[] = [
  {
    label: "Personal",
    icon: UserIcon,
    href: "#",
  },
  {
    label: "Skills",
    icon: BoltIcon,
    href: "#skills",
  },
  {
    label: "Portfolio",
    icon: ImagesIcon,
    href: "#portfolio",
  },
  {
    label: "About",
    icon: UserSquareIcon,
    href: "#about",
  },
  {
    label: "Contact",
    icon: PhoneIcon,
    href: "#contact",
  },
];

export default function BottomNavigation() {
  return (
    <ul className={styles.container}>
      {items.map((b) => (
        <BottomNavigationItem key={b.label} {...b} />
      ))}
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
