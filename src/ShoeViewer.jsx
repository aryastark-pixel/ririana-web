import React, { useState, useRef } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import ShoeModel from './Shoe';

const ShoeViewer = ({ onPartSelect }) => {
  const handlePointerDown = (event) => {
    event.stopPropagation();
    const clickedObject = event.object; // Automatically provided by React Three Fiber
    const clickedName = clickedObject.name; // Get the name of the clicked object

    if (clickedName && onPartSelect) {
      console.log(`You have selected: ${clickedName}`);
      onPartSelect(clickedName); // Notify the parent about the selection
    }
  };

  return <ShoeModel onPointerDown={handlePointerDown} />;
};

export default ShoeViewer;


