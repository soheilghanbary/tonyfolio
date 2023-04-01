"use client";
import Line from "../base/line";
import common from "~/utils/common.json";
import PortfolioCard from "../modules/portfolio-card";
import styles from "~/styles/modules/portfolio.module.css";
import { animated, useSpring } from "@react-spring/web";
import { useEffect, useRef, useState } from "react";

interface PortfolioProps {
  title: string;
  description: string;
}

function useIntersectionObserver(
  elementRef: React.RefObject<HTMLElement>,
  { threshold = 0, root = null, rootMargin = "0%", freezeOnceVisible = false }
) {
  const [entry, setEntry] = useState<IntersectionObserverEntry | undefined>();

  const frozen = entry?.isIntersecting && freezeOnceVisible;

  const updateEntry = ([entry]: IntersectionObserverEntry[]) => {
    setEntry(entry);
  };

  useEffect(() => {
    const node = elementRef?.current;
    const hasIOSupport = !!window.IntersectionObserver;

    if (!hasIOSupport || frozen || !node) return;

    const observerParams = { threshold, root, rootMargin };
    const observer = new IntersectionObserver(updateEntry, observerParams);

    observer.observe(node);

    return () => observer.disconnect();
  }, [elementRef, threshold, root, rootMargin, frozen]);

  return entry;
}

export default function Portfolio({ title, description }: PortfolioProps) {
  const triggerRef = useRef<any>(null);
  const dataRef = useIntersectionObserver(triggerRef, {
    freezeOnceVisible: false,
  });

  const titleProps = useSpring({
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
          <animated.div style={titleProps}>
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
