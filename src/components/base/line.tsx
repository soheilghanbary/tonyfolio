"use client";
import { useState, useEffect } from "react";
import { animated, useSpring } from "@react-spring/web";

export default function Line() {

  const widthProps = useSpring({
    width: '100%',
    opacity: 1,
    from: { width: '0%', opacity: 0 },
    delay: 300,
    config: {
      duration: 1000,
    },
  });
  return <animated.hr style={widthProps} className="border-line my-8" />;
}
