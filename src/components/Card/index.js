import React from "react";

export function Card({
  cardClass,
  imgClass,
  txtClass,
  url,
  altTxt,
  txtContent,
}) {
  return (
    <div className={cardClass}>
      <img className={imgClass} src={url} alt={altTxt} />
      <p className={txtClass}>{txtContent}</p>
    </div>
  );
}
