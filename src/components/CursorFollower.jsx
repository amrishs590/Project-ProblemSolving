import React, { useEffect, useRef } from "react";
import "./CursorFollower.css";

const CursorFollower = () => {
  const cursorRef = useRef(null);
  const position = useRef({ x: 0, y: 0 });
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    document.addEventListener("mousemove", updateMousePosition);

    const follow = () => {
      position.current.x += (mouse.current.x - position.current.x) * 0.1;
      position.current.y += (mouse.current.y - position.current.y) * 0.1;

      const el = cursorRef.current;
      if (el) {
        el.style.left = `${position.current.x}px`;
        el.style.top = `${position.current.y}px`;
      }

      requestAnimationFrame(follow);
    };

    follow();

    return () => {
      document.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return <div ref={cursorRef} className="cursor-follower" />;
};

export default CursorFollower;
