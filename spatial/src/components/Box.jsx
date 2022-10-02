import React from "react";

function Box(props) {
  return (
    <mesh {...props} receiveShadow={true} castShadow={true}>
      <boxGeometry />
      <meshPhysicalMaterial color={"white"} />
    </mesh>
  );
}

export default Box;