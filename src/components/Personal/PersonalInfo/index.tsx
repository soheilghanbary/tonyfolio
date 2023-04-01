"use client";
import { useRef } from "react";
import { animated, useSpring } from "@react-spring/web";
import { Button } from "~/components/base/buttons";
import styles from "~/styles/modules/personal.module.css";
import useIntersectionObserver from "~/lib/hooks/useIntersectionObserver";

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
    delay: 500,
    config: {
      duration: 600,
    },
  });

  const subtitleProps = useSpring({
    from: { y: 50, opacity: 0 },
    to: {
      y: dataRef?.isIntersecting ? 0 : 50,
      opacity: dataRef?.isIntersecting ? 1 : 0,
    },
    delay: 800,
    config: {
      duration: 600,
    },
  });

  return (
    <div ref={triggerRef}>
      <animated.h2 style={titleProps}>
        {title}
        <br />
        <span>{subtitle}</span>
      </animated.h2>
      <animated.p style={subtitleProps}>{description}</animated.p>
      <animated.div style={subtitleProps} className={styles.buttons}>
        <Button color="success" text={btnText} />
      </animated.div>
    </div>
  );
}
