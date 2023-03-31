import Line from "../base/line";
import common from "~/utils/common.json";
import PortfolioCard from "../modules/portfolio-card";
import styles from "~/styles/modules/portfolio.module.css";

interface PortfolioProps {
  title: string;
  description: string;
}

export default function Portfolio({ title , description }: PortfolioProps) {
  return (
    <div id="portfolio" className={styles.container}>
      <div className={styles.info}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className={styles.cards}>
        {common.projects.map(({ title, image, tags, description }, i) => (
          <>
            <PortfolioCard
              title={title}
              image={image}
              description={description}
              tags={tags}
            />
            {i !== 2 && <Line />}
          </>
        ))}
      </div>
    </div>
  );
}
