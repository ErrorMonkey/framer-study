import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import {
  easeOut,
  motion,
  stagger,
  useMotionValue,
  Variants,
  useTransform,
} from 'framer-motion';

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #e09, #d0e);
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255);
  border-radius: 20px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const BiggerBox = styled.div`
  width: 600px;
  height: 600px;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const TestBoxContainer = styled(motion.ul)`
  width: 500px;
  height: 500px;
  background-color: rgba(255,255,255,0.4);
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
`

const TestBox = styled(motion.li)`
  width: 50px;
  height: 50px;
  background-color: rgb(255,255,255);
  box-shadow: 0 2px 3px rgba(0,0,0,0.2);
`

// const boxVariants = {};

function App() {
  // useMotionValue로 만든 x는 상태가 아님 변해도 리렌더링이 일어나지 않음
  // css의 translate를 이용해서 그런 게 아닐까 생각하고 있음
  const x = useMotionValue(0);
  const rotateZ = useTransform(x, [-400, 400], [-360, 360]);
  const biggerBoxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    rotateZ.onChange(() => console.log(rotateZ.get()));
  }, [x]);

  return (
    <Wrapper>
      <BiggerBox ref={biggerBoxRef}>
        <button onClick={() => x.set(200)}>click me</button>
        <Box
          style={{ x, rotateZ }}
          drag
          dragSnapToOrigin
          dragElastic={0.05}
          // dragConstraints={biggerBoxRef}
        />
      </BiggerBox>
      <Box
        drag
        dragConstraints={biggerBoxRef}
        whileHover={{ scale: 1.1, rotateZ: 10 }}
      />
      <TestBoxContainer>
        <TestBox drag dragSnapToOrigin/>
        <TestBox drag dragSnapToOrigin/>
        <TestBox drag dragSnapToOrigin/>
      </TestBoxContainer>
    </Wrapper>
  );
}

export default App;
