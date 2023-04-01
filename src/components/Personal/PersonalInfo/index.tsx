"use client";
import { useEffect, useState } from "react";
import { animated, useSpring } from "@react-spring/web";
import { Button } from "~/components/base/buttons";
import styles from "~/styles/modules/personal.module.css";

interface PersonalProps {
  title: string;
  subtitle: string;
  description: string;
  btnText: string;
}

export default function PersonalInfo({
  title,
  subtitle,
  description,
  btnText,
}: PersonalProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const titleProps = useSpring({
    from: { y: isLoaded ? 50 : 0 },
    opacity: isLoaded ? 1 : 0,
    delay: 500,
    config: {
      duration: 600,
    },
  });

  const subtitleProps = useSpring({
    from: { y: isLoaded ? 50 : 0 },
    opacity: isLoaded ? 1 : 0,
    delay: 800,
    config: {
      duration: 600,
    },
  });

  return (
    <>
      <animated.h2 style={titleProps}>
        {title}
        <br />
        <span>{subtitle}</span>
      </animated.h2>
      <animated.p style={subtitleProps}>{description}</animated.p>
      <animated.div style={subtitleProps} className={styles.buttons}>
        <Button color="success" text={btnText} />
      </animated.div>
    </>
  );
}
