import React, { useState,useRef } from 'react';

const Card = () => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    // Add click animation logic here
  };

  const calculateTransform = (evt, cardRef) => {
    evt.preventDefault();

    requestAnimationFrame(() => {
      const height = cardRef.current.clientHeight;
      const width = cardRef.current.clientWidth;
      const xRotation = -30 * ((evt.nativeEvent.layerY - height / 2) / height);
      const yRotation = 20 * ((evt.nativeEvent.layerX - width / 2) / width);

      cardRef.current.style.transform = `perspective(1000px) scale(1.05) rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
    });
  };

  return (
    <div
      className={`cardnew ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      onMouseMove={(evt) => calculateTransform(evt, cardRef)}
      ref={cardRef}
    >
  {/* <div class="card__title">Title</div> */}
      {/* <div class="card__content">This is the content</div> */}
      <img src="/img/home/hover-servece.png" alt="im" />
    </div>
  );
};

export default Card;
