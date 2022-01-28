import styles from './App.module.css';
import React from 'react';
import spaceship from './pics/spaceship.png';
import gsap from 'gsap';
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
gsap.registerPlugin(MotionPathPlugin);
const { useEffect, useRef, forwardRef, useState } = React;

const Box = forwardRef(({ children }, ref) => {
  return <div className={styles.box} ref={ref}>{children}</div>;
});

function App() {
  const [reversed, setReversed] = useState(false);
  const boxy = useRef();
  const tl = useRef();
  useEffect(() => {
    tl.current = gsap.timeline()
      .to(boxy.current, {
        duration: 5,
        repeat: 12,
        repeatDelay: 3,
        yoyo: true,
        ease: "power1.inOut",
        motionPath: {
          path: "#path",
          align: "#path",
          autoRotate: true,
          alignOrigin: [0.5, 0.5]
        }
      })
  }, []);

  useEffect(() => {
    tl.current.reversed(reversed);
  }, [reversed]);

  return (
    <div className={styles.App} >
      <div>
        <button onClick={() => setReversed(!reversed)}>Toggle</button>
      </div>
      <svg  >
        <path id="path" d="M84.868 93.602C116.64 254.052 197.658 26.883 278.677 322.362 389.878 651.201 621.813 295.354 839.451 474.866 1104.747 544.764 1103.158 400.202 1104.747 385.905"/>
      </svg>
      <Box ref={boxy}><img src={spaceship} alt='ship'></img></Box>
    </div>
  );
}

export default App;
