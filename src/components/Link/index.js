import React from "react";

export function Link({ url, target, children, className, onClick }) {
  return (
    <a
      href={url}
      target={target}
      className={`link-style ${className}`}
      rel="noopener noreferrer"
      onClick={onClick}
    >
      {children}
    </a>
  );
}
