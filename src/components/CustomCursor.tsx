import { useEffect, useRef } from "react";
import styled from "styled-components";

export const StyledCustomCursor = styled.img`
  position: fixed;
  left: -16px;
  top: -16px;
  width: 32px;
  height: 32px;
  object-fit: contain;
  pointer-events: none;
`;

export const CustomCursor = () => {
  const cursorRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    function onMouseMove(e: MouseEvent) {
      const x = e.clientX;
      const y = e.clientY;
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${x}px, ${y}px)`;
      }
    }

    window.addEventListener("mousemove", onMouseMove);

    // clean up function
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  return (
    <StyledCustomCursor ref={cursorRef} src="/pokeball.png" alt="poke-cursor" />
  );
};
