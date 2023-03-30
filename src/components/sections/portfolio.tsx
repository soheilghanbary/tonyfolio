import Line from "../base/line";
import common from "~/utils/common.json";
import PortfolioCard from "../modules/portfolio-card";
import styles from "~/styles/modules/portfolio.module.css";

export default function Portfolio() {
  return (
    <div id="portfolio" className={styles.container}>
      <div className={styles.info}>
        <h2>I like to create something powerful, simple, and clean.</h2>
        <p>
          Over the years, I have had the honor to collaborate with clients
          ranging from startups to SMEs. Below are some of the works I've been
          involved with.
        </p>
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
