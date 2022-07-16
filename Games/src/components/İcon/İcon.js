import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

function IconComponent({ name, size, color }) {
  return (
    <Icon
      name={name}
      size={size}
      color={color}
    />
  );
}
export default IconComponent;