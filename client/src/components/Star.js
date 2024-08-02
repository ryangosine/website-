import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

const fadeInOut = keyframes`
  0% { opacity: 0; }
  20% { opacity: 0/5; }
  40% { opacity: 0.5; }
  80% {opacity: 1;}
  100% { opacity: 0; }
`;

const StarImage = styled.img`
  position: absolute;
  width: 10px;
  height: 10px;
  animation: ${fadeInOut} ${(props) => props.duration}s ease-in-out infinite;
  left: ${(props) => props.left}%;
  top: ${(props) => props.top}%;
`;

const Star = () => {
  const [position, setPosition] = useState({ left: 0, top: 0 });
  const [duration, setDuration] = useState(5);

  useEffect(() => {
    setPosition({
      left: Math.random() * 100,
      top: Math.random() * 100,
    });
    setDuration(Math.random() * 10 + 5); // Random duration between 2 and 5 seconds
  }, []);

  return (
    <StarImage
      src="https://img.icons8.com/?size=100&id=QyZp4Pat02yK&format=png&color=000000"
      alt="Star"
      left={position.left}
      top={position.top}
      duration={duration}
    />
  );
};

export default Star;
