import React from "react";

export function Link({ url, target, children, className }) {
  return (
    <a
      href={url}
      target={target}
      className={className}
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}
