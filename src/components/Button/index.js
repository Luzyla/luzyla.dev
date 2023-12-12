import React from "react";

export function Button({ url, target, className, txtButton }) {
  return (
    <a href={url} target={target}>
      <li className={className}>{txtButton}</li>
    </a>
  );
}
