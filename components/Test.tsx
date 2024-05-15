import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import styled from 'styled-components';

const Test1 = () => {
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
	const ref = useRef(null);
	const isInView = useInView(ref);

	const handleMouseMove = (event) => {
		setMousePosition({ x: event.pageX, y: event.pageY });
	};

	const Wrapper = styled(motion.div)`
		font-size: x-large;
		width: 100wh;
		height: 100vh;
	`;

	useEffect(() => {
		console.log('isInView: ', isInView);
	}, [isInView]);

	return (
		<>
			<Wrapper ref={ref}>
				<h1>Mouse Position: {isInView}</h1>
			</Wrapper>
			{/* <Wrapper onMouseMove={handleMouseMove}>
				<h1>
					Mouse Position: {mousePosition.x}, {mousePosition.y}
				</h1>
			</Wrapper> */}
		</>
	);
};

export default Test1;
