import React from "react";

export function Link({ url, target, children }) {
  return (
    <a href={url} target={target} rel="noopener noreferrer">
      {children}
    </a>
  );
}
