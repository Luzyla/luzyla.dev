import React from "react";

export function EmojiWrap({ imgClass, children, ariaLabel, role }) {
  return (
    <span
      className={imgClass}
      role={role ? role : "img"}
      aria-label={ariaLabel}
    >
      {children}
    </span>
  );
}
