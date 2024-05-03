import React from "react";

export function Icon({
  component: Component,
  className,
  size,
  color,
  onClick,
}) {
  return (
    <Component
      className={className}
      size={size}
      color={color}
      onclick={onClick}
    />
  );
}
