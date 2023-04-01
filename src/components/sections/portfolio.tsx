"use client";
import Line from "../base/line";
import common from "~/utils/common.json";
import PortfolioCard from "../modules/portfolio-card";
import styles from "~/styles/modules/portfolio.module.css";
import { animated, useSpring } from "@react-spring/web";
import { useRef } from "react";
import useIntersectionObserver from "~/lib/hooks/useIntersectionObserver";

interface PortfolioProps {
  title: string;
  description: string;
}

export default function Portfolio({ title, description }: PortfolioProps) {
  const triggerRef = useRef<any>(null);
  const dataRef = useIntersectionObserver(triggerRef, {
    freezeOnceVisible: false,
  });

  const itemProps = useSpring({
    from: { y: 50, opacity: 0 },
    to: {
      y: dataRef?.isIntersecting ? 0 : 50,
      opacity: dataRef?.isIntersecting ? 1 : 0,
    },
    delay: 300,
    config: {
      duration: 600,
    },
  });

  return (
    <div id="portfolio" className={styles.container} ref={triggerRef}>
      <div className={styles.info}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className={styles.cards}>
        {common.projects.map(({ title, image, tags, description }, i) => (
          <animated.div style={itemProps}>
            <PortfolioCard
              title={title}
              image={image}
              description={description}
              tags={tags}
            />
            {i !== 2 && <Line />}
          </animated.div>
        ))}
      </div>
    </div>
  );
}
