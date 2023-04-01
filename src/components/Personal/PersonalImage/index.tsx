"use client"
import { useEffect , useState } from 'react'
import TonyImage from '~/assets/images/tony.png'
import { animated , useSpring } from '@react-spring/web'
import styles from '~/styles/modules/personal.module.css'

export default function PersonalImage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const fadeProps = useSpring({
    from: { scale: isLoaded ? 2 : 1 },
    opacity: isLoaded ? 1 : 0,
    delay: 300,
    config: {
      duration: 700,
    },
  });

  return (
    <animated.div style={fadeProps} className={styles.image}>
      <img
        draggable="false"
        src={TonyImage.src}
        className="grayscale"
        loading="lazy"
      />
    </animated.div>
  );
}
