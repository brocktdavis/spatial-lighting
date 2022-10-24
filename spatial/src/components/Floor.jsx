import React from "react";

function Floor(props) {
  return (
    <mesh {...props} receiveShadow castShadow>
      <boxGeometry args={[20,1,10]} />
      <meshPhysicalMaterial color="white" />
    </mesh>
  );
}

export default Floor;