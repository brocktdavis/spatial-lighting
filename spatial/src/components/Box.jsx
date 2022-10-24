import React from "react";

function Box(props) {
  return (
    <mesh {...props} receiveShadow castShadow>
      <boxGeometry />
      <meshPhysicalMaterial color={"white"} />
    </mesh>
  );
}

export default Box;
