import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber'; 
import { OrbitControls } from '@react-three/drei'; 
import ShoeViewer from './ShoeViewer';
function ShoePage() {
    const [selectedPart, setSelectedPart] = useState(null);
  
    const handlePartSelection = (part) => {
      setSelectedPart(part); // Update the selected part
    };
  
    return (
      <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100vw',
        height: '100vh',
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: 'black', 
      }}
    >
        {/* 3D Canvas */}
        <Canvas>
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <ShoeViewer onPartSelect={handlePartSelection} />
          <OrbitControls />
        </Canvas>
  
        {/* Overlay Container */}
        {selectedPart && (
          <div
            style={{
              position: 'absolute',
              top: 20,
              right: 20,
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              padding: '15px',
              borderRadius: '8px',
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
            }}
          >
            <h4 style={{ margin: 0, marginBottom: '10px', fontSize: '16px' }}>Selected Part</h4>
            <p style={{ margin: 0, fontSize: '14px' }}>
              You clicked on: <strong>{selectedPart}</strong>
            </p>
          </div>
        )}
      </div>
    );
  }
  
  export default ShoePage;