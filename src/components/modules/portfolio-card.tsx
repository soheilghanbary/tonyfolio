import styles from "~/styles/modules/portfolio.module.css";
import { Button } from "../base/buttons";

interface PortfolioProps {
  image: string;
  tags: string[];
  title: string;
  description: string;
}
export default function PortfolioCard({
  image,
  tags,
  title,
  description,
}: PortfolioProps) {
  return (
    <div className={styles.card}>
      <img draggable="false" src={image} />
      <div className={styles.section}>
        <div className={styles.tags}>
          {tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <h2>{title}</h2>
        <p>{description}</p>
        <div>
          <Button color="default" text="See Details" />
        </div>
      </div>
    </div>
  );
}
