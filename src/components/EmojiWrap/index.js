import React from "react";

export function EmojiWrap({ imgClass, children, ariaLabel }) {
  return (
    <span className={imgClass} role="img" aria-label={ariaLabel}>
      {children}
    </span>
  );
}
