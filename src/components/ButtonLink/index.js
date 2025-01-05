import React from "react";
import { Link } from "../Link";

export function ButtonLink({
  url,
  target,
  className,
  txtButton,
  classNameLink,
  onClick,
}) {
  return (
    <Link url={url} target={target} className={classNameLink} onClick={onClick}>
      {<li className={className}>{txtButton}</li>}
    </Link>
  );
}
