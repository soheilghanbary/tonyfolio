"use client";
import { useEffect, useRef, useState } from "react";
import TonyImage from "~/assets/images/tony.png";
import { animated, useSpring } from "@react-spring/web";
import styles from "~/styles/modules/personal.module.css";
import useIntersectionObserver from "~/lib/hooks/useIntersectionObserver";

export default function PersonalImage() {
  const triggerRef = useRef<any>(null);
  const dataRef = useIntersectionObserver(triggerRef, {
    freezeOnceVisible: false,
  });

  const fadeProps = useSpring({
    from: { scale: 1.5, opacity: 0 },
    to: {
      scale: dataRef?.intersectionRatio ? 1 : 1.5,
      opacity: dataRef?.intersectionRatio ? 1 : 0,
    },
    delay: 300,
    config: {
      duration: 700,
    },
  });

  return (
    <animated.div style={fadeProps} className={styles.image} ref={triggerRef}>
      <img
        draggable="false"
        src={TonyImage.src}
        className="grayscale"
        loading="lazy"
      />
    </animated.div>
  );
}
