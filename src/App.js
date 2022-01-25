import styles from './App.module.css';
import React from 'react';
//import background from './pics/skybgr.jpg';
import spaceship from './pics/spaceship.png';
import gsap from 'gsap';
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
        y: 150,
        x: 100,
        rotate: 180
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
      <Box ref={boxy}><img src={spaceship} alt='ship'></img></Box>
    </div>
  );
}

export default App;
