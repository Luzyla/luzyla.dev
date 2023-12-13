import React from "react";

export function Card({
  cardClass,
  imgClass,
  txtClass,
  url,
  altTxt,
  txtContent,
  dataName,
}) {
  return (
    <div className={cardClass} datatype={dataName}>
      <img className={imgClass} src={url} alt={altTxt} />
      <p className={txtClass}>{txtContent}</p>
    </div>
  );
}
