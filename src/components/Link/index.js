import React from "react";

export function Link({ url, target, children, className }) {
  return (
    <a
      href={url}
      target={target}
      className={`link-style ${className}`}
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}
