import {
  CssIcon,
  NestIcon,
  LaravelIcon,
  NuxtIcon,
  WordpressIcon,
  PrismaIcon,
  TRPCIcon,
  NodeIcon,
  GithubIcon,
  PythonIcon,
  ReactIcon,
  TypeScriptIcon,
  SassIcon,
  ReduxIcon,
  VueIcon,
  JsIcon,
  TailwindIcon,
} from "~/assets/icons";
import styles from "~/styles/modules/skills.module.css";

interface SkillsProps {
  title: string;
}

interface SkillProps {
  icon: any;
  title: string;
  level: string;
}

const skills: SkillProps[] = [
  {
    icon: ReactIcon,
    title: "React",
    level: "advanced",
  },
  {
    icon: TypeScriptIcon,
    title: "TypeScript",
    level: "advanced",
  },
  {
    icon: JsIcon,
    title: "JavaScript ES2023",
    level: "advanced",
  },
  {
    icon: TailwindIcon,
    title: "Tailwind",
    level: "advanced",
  },
  {
    icon: CssIcon,
    title: "CSS3",
    level: "advanced",
  },
  {
    icon: SassIcon,
    title: "Sass",
    level: "advanced",
  },
  {
    icon: ReduxIcon,
    title: "Redux",
    level: "medium",
  },
  {
    icon: NodeIcon,
    title: "Node.JS",
    level: "medium",
  },
  {
    icon: NestIcon,
    title: "Nest.JS",
    level: "advanced",
  },
  {
    icon: TRPCIcon,
    title: "tRPC",
    level: "advanced",
  },
  {
    icon: PrismaIcon,
    title: "Prisma",
    level: "advanced",
  },
  {
    icon: GithubIcon,
    title: "Github",
    level: "advanced",
  },
  {
    icon: LaravelIcon,
    title: "Laravel",
    level: "advanced",
  },
  {
    icon: WordpressIcon,
    title: "WordPress",
    level: "advanced",
  },
  {
    icon: VueIcon,
    title: "Vue.JS",
    level: "medium",
  },
  {
    icon: NuxtIcon,
    title: "Nuxt",
    level: "medium",
  },
  {
    icon: PythonIcon,
    title: "Python",
    level: "medium",
  },
];

export default function Skills({ title }: SkillsProps) {
  return (
    <div id="skills" className={`${styles.container}`}>
      <h2>{title}</h2>
      <ul className={styles.items}>
        {skills.map((item) => (
          <li>
            <item.icon />
            <div className="flex items-center gap-2">
              <span className="text-heading">{item.title}</span>
              <span className="text-sm text-body">{item.level}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
