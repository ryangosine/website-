import React, { useState, useEffect, useRef, useCallback } from "react";
import styled from "styled-components";

const CustomScrollbar = ({ thumbHeight, thumbTop }) => {
  const trackRef = useRef(null);
  const thumbRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartY(e.clientY - thumbRef.current.getBoundingClientRect().top);
  };

  const handleMouseMove = useCallback(
    (e) => {
      if (!isDragging) return;
      const track = trackRef.current;
      const thumb = thumbRef.current;
      const trackRect = track.getBoundingClientRect();
      const y = e.clientY - trackRect.top - startY;
      const maxY = trackRect.height - thumb.offsetHeight;
      const newTop = Math.max(0, Math.min(y, maxY));
      const scrollPercentage = newTop / maxY;
      const scrollableParent = track.parentElement;
      scrollableParent.scrollTop =
        scrollPercentage *
        (scrollableParent.scrollHeight - scrollableParent.clientHeight);
    },
    [isDragging, startY]
  );

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [handleMouseMove]);

  return (
    <ScrollbarTrack ref={trackRef}>
      <ScrollbarThumb
        ref={thumbRef}
        style={{
          height: `${thumbHeight}%`,
          top: `${thumbTop}%`,
        }}
        onMouseDown={handleMouseDown}
      />
    </ScrollbarTrack>
  );
};

const ScrollbarTrack = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: 10px;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.1);
  z-index: 1000;
  opacity: 1; // Always visible
  transition: opacity 0.3s ease;
`;

const ScrollbarThumb = styled.div`
  position: absolute;
  width: 100%;
  background-color: white;
  border-radius: 5px;
  transition: background-color 0.2s;

  &:hover {
    background-color: green;
  }
`;

export default CustomScrollbar;
